"""
使用 AI 模型为词库中的单词生成自然拼读（phonics）拆分。
直接调用 z.ai 兼容 OpenAI 格式的 API，按自然拼读规则拆分单词。

拆分规则：
  - 单词按发音的自然拼读单元（音节/字母组合）拆开，用 - 连接
  - 如 hello → he-llo, fantastic → fan-tas-tic
  - 不发音字母可并入相邻段
  - 短语类按单词拆，空格保留
"""
import os
import re
import json
import time
import urllib.request
import urllib.error

DICT_PATH = os.path.join(os.path.dirname(__file__), "..", "js", "dict.js")
OUT_PATH = os.path.join(os.path.dirname(__file__), "..", "js", "phonics.js")
EXISTING_PATH = OUT_PATH  # 已生成的会被跳过

# 注意：这里不硬编码 API key，由环境变量提供
API_URL = os.environ.get("NVIDIA_API_URL", "https://integrate.api.nvidia.com/v1/chat/completions")
API_KEY = os.environ.get("NVIDIA_API_KEY", "")
MODEL = "meta/llama-3.1-8b-instruct"


def extract_words():
    """从 dict.js 提取 (id, word) 列表"""
    entries = []
    current_id = None
    current_word = None
    with open(DICT_PATH, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            m_id = re.match(r'id:\s*"([^"]+)"', line)
            m_word = re.match(r'word:\s*"([^"]*)"', line)
            if m_id:
                current_id = m_id.group(1)
            if m_word:
                current_word = m_word.group(1)
            if line == "}," or line == "}":
                if current_id and current_word is not None:
                    entries.append((current_id, current_word))
                current_id = None
                current_word = None
    return entries


def load_existing():
    """加载已生成的拆分（增量生成时跳过已存在的）"""
    if not os.path.exists(EXISTING_PATH):
        return {}
    try:
        with open(EXISTING_PATH, "r", encoding="utf-8") as f:
            content = f.read()
        # 提取 JSON 部分
        m = re.search(r'const PHONICS = (\{.*?\});', content, re.DOTALL)
        if m:
            return json.loads(m.group(1))
    except Exception as e:
        print(f"加载已有数据失败: {e}")
    return {}


def call_ai(words_batch):
    """
    调用 AI 模型，批量拆分单词。
    words_batch: [(id, word), ...]
    返回: {id: split_word}
    """
    system = "You are an English phonics expert. You output ONLY a JSON object mapping each id to its hyphen-separated phonics split. No code, no markdown, no explanation."

    # 用纯英文 prompt，模型遵循度更高
    user_lines = []
    user_lines.append("Split each English word into natural phonics chunks separated by hyphens (-).")
    user_lines.append("Rules:")
    user_lines.append("- Split by syllables and letter-combinations (vowel teams, consonant blends).")
    user_lines.append("- Single-syllable short words (3-4 letters, one vowel) stay unsplit.")
    user_lines.append("- Examples: hello=he-llo, fantastic=fan-tas-tic, comfortable=com-fort-a-ble, dictionary=dic-tion-ar-y, beautiful=beau-ti-ful, night=night, sky=sky, str=do-not-split-consonant-blends.")
    user_lines.append("- For phrases (contain spaces): split each word, keep the space between words. Keep placeholders sb/sth as-is.")
    user_lines.append("- Output ONLY a JSON object: {\"id1\":\"split1\",\"id2\":\"split2\"}. The letters after removing '-' and spaces must equal the original letters.")
    user_lines.append("")
    user_lines.append("Words to split:")
    for wid, w in words_batch:
        user_lines.append(f"{wid} = {w}")

    payload = {
        "model": MODEL,
        "messages": [
            {"role": "system", "content": system},
            {"role": "user", "content": "\n".join(user_lines)}
        ],
        "temperature": 0.1,
        "max_tokens": 4000
    }

    req = urllib.request.Request(
        API_URL,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {API_KEY}"
        },
        method="POST"
    )

    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            content = data["choices"][0]["message"]["content"]
            return parse_ai_response(content, words_batch)
    except urllib.error.HTTPError as e:
        print(f"  HTTP 错误 {e.code}: {e.read().decode('utf-8', errors='ignore')[:200]}")
        return {}
    except Exception as e:
        print(f"  请求失败: {e}")
        return {}


def parse_ai_response(content, words_batch):
    """从模型回复中解析出 {id: split} 字典，容错多种格式"""
    content = content.strip()

    # 1) 直接是 JSON 对象
    try:
        obj = json.loads(content)
        if isinstance(obj, dict):
            return {k: v for k, v in obj.items() if isinstance(v, str)}
    except Exception:
        pass

    # 2) 去掉 markdown 代码块后重试
    cleaned = content
    if "```" in cleaned:
        # 提取最后一个 ``` 块
        blocks = re.findall(r'```(?:json)?\s*(.*?)```', cleaned, re.DOTALL)
        if blocks:
            cleaned = blocks[-1].strip()
    try:
        obj = json.loads(cleaned)
        if isinstance(obj, dict):
            return {k: v for k, v in obj.items() if isinstance(v, str)}
    except Exception:
        pass

    # 3) 从文本中提取第一个 {...} 块
    m = re.search(r'\{[^{}]*\}', cleaned, re.DOTALL)
    if m:
        try:
            obj = json.loads(m.group(0))
            if isinstance(obj, dict):
                return {k: v for k, v in obj.items() if isinstance(v, str)}
        except Exception:
            pass

    # 4) 退化：用 "id": "split" 模式逐行解析
    result = {}
    for line in cleaned.splitlines():
        # 形如  "id": "split"  或  id = split  或  id: split
        m = re.match(r'\s*"?([\w]+)"?\s*[:=]\s*"([^"]+)"', line)
        if m:
            result[m.group(1)] = m.group(2)
    if result:
        return result

    print(f"  无法解析模型回复: {content[:200]}")
    return {}


def validate_split(original, split):
    """校验拆分结果：拆分后去掉 - 和空格应等于原文去掉空格"""
    if not split:
        return False
    # 去掉所有非字母字符比较
    orig_clean = re.sub(r'[^a-zA-Z]', '', original).lower()
    split_clean = re.sub(r'[^a-zA-Z]', '', split).lower()
    return orig_clean == split_clean


def main():
    if not API_KEY:
        print("错误：未设置 NVIDIA_API_KEY 环境变量")
        return

    entries = extract_words()
    existing = load_existing()

    # 只处理还没拆分的
    todo = [(wid, w) for wid, w in entries if wid not in existing]
    print(f"共 {len(entries)} 个单词，已有 {len(existing)} 个，待处理 {len(todo)} 个")
    print()

    result = dict(existing)
    batch_size = 30  # 每批 30 个单词
    failed = []

    for i in range(0, len(todo), batch_size):
        batch = todo[i:i + batch_size]
        batch_num = i // batch_size + 1
        total_batches = (len(todo) + batch_size - 1) // batch_size
        print(f"[批次 {batch_num}/{total_batches}] 处理 {len(batch)} 个单词...")

        ai_result = call_ai(batch)
        if not ai_result:
            print(f"  批次失败，跳过")
            failed.extend([wid for wid, _ in batch])
            time.sleep(2)
            continue

        ok_count = 0
        for wid, word in batch:
            split = ai_result.get(wid, "")
            if split and validate_split(word, split):
                result[wid] = split
                ok_count += 1
            else:
                # 校验失败，保留原样
                result[wid] = word
                failed.append(wid)
                print(f"  校验失败: {wid} '{word}' → '{split}'")

        print(f"  成功 {ok_count}/{len(batch)}")

        # 每批后保存
        save_result(result)
        time.sleep(1)  # 避免限流

    save_result(result)
    print()
    print(f"完成！共 {len(result)} 个，失败 {len(failed)} 个")
    if failed:
        print("失败列表（保留原样）:")
        for wid in failed[:20]:
            print(f"  - {wid}")


def save_result(result):
    """保存结果到 phonics.js"""
    with open(OUT_PATH, "w", encoding="utf-8") as f:
        f.write("/**\n")
        f.write(" * 自然拼读拆分数据（由 tools/generate_phonics_ai.py 用 AI 生成，勿手改）\n")
        f.write(" * 每个条目：wordId → 拆分字符串（段间用 - 连接，短语间用空格连接）\n")
        f.write(" * 例如: hello → he-llo, fantastic → fan-tas-tic\n")
        f.write(" */\n")
        f.write("const PHONICS = ")
        f.write(json.dumps(result, ensure_ascii=False, indent=2))
        f.write(";\n\n")
        f.write("window.PHONICS = PHONICS;\n")


if __name__ == "__main__":
    main()
