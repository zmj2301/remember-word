"""
生成所有例句的高质量音频文件（使用 Microsoft Edge TTS 神经语音）
输出到 audio/ 目录，文件名为 sentence_{word.id}.mp3

直接读取 example 字段作为 TTS 输入。Edge TTS 对英语句子朗读效果非常好。
"""
import asyncio
import edge_tts
import os
import sys
import time
import re
import json

# 从 dict.js 中提取所有单词的 id 和 example
def extract_sentences():
    dict_path = os.path.join(os.path.dirname(__file__), "..", "js", "dict.js")
    entries = []
    current_id = None
    current_example = None
    with open(dict_path, "r", encoding="utf-8") as f:
        for line in f:
            line_stripped = line.strip()
            m_id = re.match(r'id:\s*"([^"]+)"', line_stripped)
            m_example = re.match(r'example:\s*"([^"]*)"', line_stripped)
            if m_id:
                current_id = m_id.group(1)
            if m_example:
                current_example = m_example.group(1)
            # 遇到 closing brace 表示一个条目结束
            if line_stripped == "}," or line_stripped == "}":
                if current_id and current_example:
                    entries.append((current_id, current_example))
                current_id = None
                current_example = None
    return entries


def clean_example_for_tts(text):
    """
    清理例句文本，去掉可能导致 TTS 异常的内容。
    - 替换 sb → somebody, sth → something
    - 去掉括号及其内容
    - 去掉多余空白
    """
    text = text.strip()
    text = text.replace("sb’s", "somebody’s")
    text = text.replace("sb's", "somebody's")
    text = text.replace("sth", "something")
    text = text.replace("sb", "somebody")
    # 去掉括号及其内容
    text = re.sub(r'\([^)]*\)', '', text)
    # 去掉 … 符号
    text = text.replace('…', '')
    # 去掉多余空格
    text = re.sub(r'\s+', ' ', text).strip()
    return text


VOICE = "en-US-JennyNeural"  # 美式英语，女声，非常自然


async def generate_one(entry, sem, audio_dir, progress, total, failed):
    async with sem:
        word_id, example = entry
        tts_text = clean_example_for_tts(example)
        if not tts_text:
            progress[0] += 1
            return True  # 空例句跳过
        out_path = os.path.join(audio_dir, f"sentence_{word_id}.mp3")
        try:
            tts = edge_tts.Communicate(tts_text, VOICE)
            await tts.save(out_path)
            progress[0] += 1
            print(f"  [{progress[0]}/{total}] ✓ {word_id} → '{tts_text}'")
            return True
        except Exception as e:
            progress[0] += 1
            failed.append(word_id)
            print(f"  [{progress[0]}/{total}] ✗ {word_id} - {e}")
            return False


async def main():
    audio_dir = os.path.join(os.path.dirname(__file__), "..", "audio")
    os.makedirs(audio_dir, exist_ok=True)

    entries = extract_sentences()
    total = len(entries)
    print(f"共 {total} 个例句，使用语音: {VOICE}")
    print()

    # 显示清理效果预览（含 sb/sth 的条目）
    print("=== 清理效果预览（含 sb/sth 的条目）===")
    for wid, ex in entries:
        cleaned = clean_example_for_tts(ex)
        if cleaned != ex:
            print(f"  {wid}: '{ex}' → '{cleaned}'")
    print()

    print("开始生成例句音频...")
    sem = asyncio.Semaphore(5)
    progress = [0]
    failed = []

    start = time.time()
    tasks = [generate_one(e, sem, audio_dir, progress, total, failed) for e in entries]
    await asyncio.gather(*tasks)
    elapsed = time.time() - start

    print(f"\n完成！耗时 {elapsed:.1f} 秒")
    print(f"成功: {total - len(failed)}/{total}")
    if failed:
        print(f"失败: {len(failed)} 个")
        for w in failed:
            print(f"  - {w}")
        sys.exit(1)


if __name__ == "__main__":
    asyncio.run(main())
