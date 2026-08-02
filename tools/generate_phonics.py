"""
为所有单词生成"自然拼读"拆分，输出 js/phonics.js
拆分规则（基于自然拼读 phonics）：
  - 单字母不拆
  - 单词类（无空格）：按音节/字母组合拆分，用 "-" 连接
    例如: hello → he-llo, fantastic → fan-tas-tic
  - 短语类（含空格）：保留空格分隔单词，每个单词内部按拼读拆分
    例如: take sb's breath away → take-sb's breath-away
  - 标点符号（…、括号等）整体保留
  - 对于无法可靠拆分的单词（如单音节），保持原样

算法核心：
  1. 维护常见字母组合表（元音组合、辅音组合）
  2. 识别音节边界（VCV / VCCV 模式）
  3. 针对初中词汇常见模式优化
"""
import os
import re
import json

DICT_PATH = os.path.join(os.path.dirname(__file__), "..", "js", "dict.js")
OUT_PATH = os.path.join(os.path.dirname(__file__), "..", "js", "phonics.js")


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


# ============ 自然拼读拆分核心算法 ============

# 常见元音组合（作为一个发音单元）
VOWEL_PAIRS = {
    'ai', 'ay', 'ea', 'ee', 'ie', 'ei', 'oa', 'oo', 'ou', 'ow', 'oi', 'oy',
    'au', 'aw', 'ew', 'ue', 'ui', 'eu', 'ey', 'ei', 'igh', 'eigh', 'aigh',
    'ough', 'augh', 'ough'
}
# 常见辅音组合（不可拆开）
CONSONANT_PAIRS = {
    'ch', 'sh', 'th', 'wh', 'ph', 'ck', 'ng', 'nk', 'gh', 'gu', 'qu',
    'wr', 'kn', 'gn', 'mb', 'tch', 'dge', 'scr', 'spr', 'str', 'squ', 'thr', 'chr'
    , 'bl', 'cl', 'fl', 'gl', 'pl', 'sl', 'br', 'cr', 'dr', 'fr', 'gr', 'pr', 'tr',
    'sc', 'sk', 'sm', 'sn', 'sp', 'st', 'sw', 'tw', 'dw', 'sch', 'tch'
}
# 常见后缀（音节边界）
SUFFIXES = ['tion', 'sion', 'ture', 'sure', 'ness', 'ment', 'less', 'ful',
            'able', 'ible', 'ous', 'eous', 'ious', 'ance', 'ence', 'able',
            'ing', 'ed', 'er', 'est', 'ly', 'ty', 'ity', 'al', 'ic', 'ical',
            'ize', 'ise', 'ize', 'ate', 'ive', 'less']

VOWELS = set('aeiou')
VOWELS_Y = VOWELS | {'y'}


def split_syllables(word):
    """
    将单个英文单词按自然拼读规则拆分成音节/字母组合段。
    返回列表，如 ['fan', 'tas', 'tic']
    """
    word = word.lower().strip()
    if not word:
        return []

    # 纯标点或符号，不拆
    if not re.search(r'[a-zA-Z]', word):
        return [word]

    # 含撇号或特殊符号，整体保留（如 sb's）
    if "'" in word or "’" in word:
        return [word]

    # 单字母
    if len(word) <= 1:
        return [word]

    # 两个字母，不拆
    if len(word) == 2:
        return [word]

    # 三个字母的常见单词，整体不拆（如 sky, the, she, see）
    if len(word) == 3:
        # 但像 "air" "igh" 这类组合可整体读，保持不拆更自然
        return [word]

    # 四个字母：常见 CVCV 或 CVCC，多数单音节，尝试拆 VCV
    if len(word) == 4:
        parts = try_split_vccv(word)
        if parts and len(parts) > 1:
            return parts
        return [word]

    # 5 个字母以上：用算法拆分
    parts = advanced_split(word)
    if parts:
        return parts
    return [word]


def try_split_vccv(word):
    """VCCV 模式：元音-辅音-辅音-元音，在两辅音之间拆开"""
    # 找出所有元音位置
    vowels_pos = [i for i, c in enumerate(word) if c in VOWELS_Y]
    if len(vowels_pos) < 2:
        return None
    # 检查相邻元音之间是否有两个辅音
    for i in range(len(vowels_pos) - 1):
        v1, v2 = vowels_pos[i], vowels_pos[i + 1]
        gap = word[v1 + 1:v2]
        if len(gap) == 2:
            # VCCV：在两个辅音中间拆开，但要避开辅音组合
            if gap.lower() not in CONSONANT_PAIRS:
                return [word[:v1 + 2], word[v1 + 2:]]
    return None


def advanced_split(word):
    """5 字母以上的高级拆分：组合识别 + 音节边界 + 后缀"""
    w = word.lower()
    parts = []

    # Step 1: 先剥离已知后缀
    suffix = None
    stem = w
    for suf in SUFFIXES:
        if w.endswith(suf) and len(w) - len(suf) >= 3:
            suffix = suf
            stem = w[:-len(suf)]
            # -ing/-ed 前若有双辅音，还原（如 running → runn+ing，词干 runn）
            break

    # Step 2: 对词干做音节拆分
    stem_parts = syllable_divide(stem)

    # Step 3: 处理后缀
    if suffix:
        if suffix in ('ing', 'ed'):
            # 后缀单独作为一段
            parts = stem_parts + [suffix]
        elif suffix in ('er', 'est', 'ly', 'ty', 'al', 'ic'):
            parts = stem_parts + [suffix]
        elif len(suffix) >= 3:
            # 较长后缀自己再拆
            parts = stem_parts + syllable_divide(suffix)
        else:
            parts = stem_parts + [suffix]
    else:
        parts = stem_parts

    # 合并：如果只有一段，尝试用 VCCV/VCV 再拆
    if len(parts) == 1:
        vccv = try_split_vccv(w)
        if vccv:
            return vccv
        vcv = try_split_vcv(w)
        if vcv:
            return vcv

    return parts if parts else [word]


def try_split_vcv(word):
    """VCV 模式：元音-辅音-元音，通常在前一个元音后拆开（开音节）"""
    vowels_pos = [i for i, c in enumerate(word) if c in VOWELS_Y]
    if len(vowels_pos) < 2:
        return None
    for i in range(len(vowels_pos) - 1):
        v1, v2 = vowels_pos[i], vowels_pos[i + 1]
        gap = word[v1 + 1:v2]
        if len(gap) == 1:
            # VCV：在辅音后拆开（如 he-llo 中 he）
            # 但常见情况是辅音归下一音节（hello = hel-lo? 不对，应是 he-llo）
            # 这里采用辅音归后：VC|V
            return [word[:v1 + 1], word[v1 + 1:]]
    return None


def syllable_divide(s):
    """对一个字符串做音节拆分（不考虑后缀）"""
    if not s:
        return []
    if len(s) <= 3:
        return [s]

    # 用元音作为锚点，识别音节
    n = len(s)
    result = []
    i = 0
    current = ""

    while i < n:
        c = s[i]
        current += c

        # 尝试匹配多字母组合（元音组合或辅音组合）
        matched_pair = False
        for length in (3, 2):
            piece = s[i:i + length].lower()
            if length <= len(s) - i:
                if piece in VOWEL_PAIRS or piece in CONSONANT_PAIRS:
                    current += s[i + 1:i + length]
                    i += length
                    matched_pair = True
                    break
        if matched_pair:
            # 检查是否是音节结束（后面是辅音+元音 或 单词结尾）
            continue

        i += 1

    # 上面这种方法难以精确分音节，改用更直接的"找元音"算法
    return divide_by_vowels(s)


def divide_by_vowels(s):
    """
    基于元音位置拆音节。
    规则：
      - 每个音节通常包含一个元音（或元音组合）
      - 两个元音之间的辅音：单辅音归后音节（开音节倾向），双辅音拆开
    """
    s = s.lower()
    n = len(s)
    if n <= 3:
        return [s]

    # 标记每个字符是否是元音（处理元音组合）
    is_vowel = [False] * n
    i = 0
    while i < n:
        # 检查元音组合（最多 3 字母）
        matched = False
        for length in (3, 2):
            if i + length <= n:
                piece = s[i:i + length]
                if piece in VOWEL_PAIRS:
                    for k in range(length):
                        is_vowel[i + k] = True
                    i += length
                    matched = True
                    break
        if not matched:
            if s[i] in VOWELS_Y:
                is_vowel[i] = True
            i += 1

    # 找出每个元音音节核的位置
    vowel_cores = []
    i = 0
    while i < n:
        if is_vowel[i]:
            # 找到这个元音核的结束位置（连续的元音算一个核）
            j = i
            while j < n and is_vowel[j]:
                j += 1
            vowel_cores.append((i, j - 1))
            i = j
        else:
            i += 1

    if len(vowel_cores) <= 1:
        return [s]

    # 在相邻两个元音核之间找分割点
    boundaries = []
    for k in range(len(vowel_cores) - 1):
        _, end1 = vowel_cores[k]
        start2, _ = vowel_cores[k + 1]
        gap = s[end1 + 1:start2]  # 两个元音之间的辅音
        if len(gap) == 0:
            # 相邻元音（如 ia, io），分割点在元音之间
            boundaries.append(end1 + 1)
        elif len(gap) == 1:
            # 单辅音：归到后一个音节（VCV，开音节）如 he-llo
            boundaries.append(end1 + 1)
        else:
            # 双辅音或多辅音：在中间拆（VCCV）
            # 但要避开辅音组合（ch, sh, th 等不拆）
            mid = len(gap) // 2
            # 检查中间是否是辅音组合
            left = gap[:mid]
            right = gap[mid:]
            if right[:2] in CONSONANT_PAIRS and len(right) >= 2:
                # 右边是组合，分割点左移
                boundaries.append(end1 + 1 + mid - (len(right) - 2))
            elif left[-2:] in CONSONANT_PAIRS and len(left) >= 2:
                boundaries.append(end1 + 1 + len(left))
            else:
                boundaries.append(end1 + 1 + mid)

    # 按分割点切分
    parts = []
    prev = 0
    for b in boundaries:
        parts.append(s[prev:b])
        prev = b
    parts.append(s[prev:])

    # 过滤空段
    parts = [p for p in parts if p]
    return parts if parts else [s]


def split_word(word):
    """
    处理一个 word 字段（可能是单词或短语）。
    - 短语：按空格拆单词，每个单词做拼读拆分，再用空格连接
    - 单词：直接做拼读拆分
    返回拆分后的字符串，各段用 "-" 连接，短语间用空格连接。
    """
    word = word.strip()
    if not word:
        return word

    # 含占位符的（sb / sth）：保留占位符整体
    # 先按空格切分短语
    tokens = word.split(' ')
    split_tokens = []
    for tok in tokens:
        # 跳过非字母 token（如括号内容里的）
        if not re.search(r'[a-zA-Z]', tok):
            split_tokens.append(tok)
            continue
        # sb / sth 占位符整体保留
        if tok.lower() in ('sb', 'sth', "sb's", "sb’s", "sb'"):
            split_tokens.append(tok)
            continue
        # 单词做拼读拆分
        parts = split_syllables(tok)
        split_tokens.append('-'.join(parts))
    return ' '.join(split_tokens)


def main():
    entries = extract_words()
    print(f"共 {len(entries)} 个条目")
    print()
    print("=== 拆分效果预览 ===")

    result = {}
    preview_count = 0
    for wid, word in entries:
        parts = split_word(word)
        result[wid] = parts
        # 显示有变化的条目（前 50 个）
        if parts != word and preview_count < 60:
            print(f"  {wid}: {word} → {parts}")
            preview_count += 1

    # 写入 phonics.js
    with open(OUT_PATH, "w", encoding="utf-8") as f:
        f.write("/**\n")
        f.write(" * 自然拼读拆分数据（由 tools/generate_phonics.py 生成，勿手改）\n")
        f.write(" * 每个条目：wordId → 拆分字符串（段间用 - 连接，短语间用空格连接）\n")
        f.write(" * 例如: 'hello' → 'he-llo', 'fantastic' → 'fan-tas-tic'\n")
        f.write(" */\n")
        f.write("const PHONICS = ")
        f.write(json.dumps(result, ensure_ascii=False, indent=2))
        f.write(";\n\n")
        f.write("window.PHONICS = PHONICS;\n")

    print()
    print(f"已写入 {OUT_PATH}")
    print(f"共 {len(result)} 个条目")

    # 统计
    split_count = sum(1 for v in result.values() if '-' in v)
    print(f"其中 {split_count} 个单词/短语被拆分（含 -）")


if __name__ == "__main__":
    main()
