"""
生成所有单词的高质量音频文件（使用 Microsoft Edge TTS 神经语音）
输出到 audio/ 目录，文件名为 {word.id}.mp3

使用 word 字段（去掉括号语法标记）作为 TTS 输入，避免读成超长句子。
例如: "feel free (to do sth)" → 只读 "feel free"
"""
import asyncio
import edge_tts
import os
import sys
import time
import re
import json

# 从 dict.js 中提取所有单词的 id 和 word
def extract_words():
    dict_path = os.path.join(os.path.dirname(__file__), "..", "js", "dict.js")
    entries = []
    current_id = None
    current_word = None
    with open(dict_path, "r", encoding="utf-8") as f:
        for line in f:
            line_stripped = line.strip()
            m_id = re.match(r'id:\s*"([^"]+)"', line_stripped)
            m_word = re.match(r'word:\s*"([^"]*)"', line_stripped)
            if m_id:
                current_id = m_id.group(1)
            if m_word:
                current_word = m_word.group(1)
            # 遇到 closing brace 表示一个条目结束
            if line_stripped == "}," or line_stripped == "}":
                if current_id and current_word is not None:
                    entries.append((current_id, current_word))
                current_id = None
                current_word = None
    return entries

def clean_text_for_tts(word_text):
    """
    清理 word 字段，去掉语法标记，只保留核心朗读内容。
    例如: "feel free (to do sth)" → "feel free"
          "lend (sb) a hand" → "lend a hand"
          "take sb’s breath away" → "take somebody’s breath away"
    课本占位符替换（TTS 能正确发音）:
          sb  → somebody   (课本里代表"某人")
          sth → something (课本里代表"某事")
    """
    text = word_text
    # 替换课本占位符（先替换所有格，再替换普通形式）
    text = text.replace("sb’s", "somebody’s")
    text = text.replace("sb's", "somebody's")
    text = text.replace("sb’", "somebody’")
    text = text.replace("sth", "something")
    text = text.replace("sb", "somebody")
    # 去掉括号及其内容
    text = re.sub(r'\([^)]*\)', '', text)
    # 去掉 … 符号
    text = text.replace('…', '')
    # 处理 / 分隔符，取第一个
    text = text.split('/')[0].strip()
    # 去掉多余空格
    text = re.sub(r'\s+', ' ', text).strip()
    # 去掉末尾的标点符号
    text = text.rstrip('.,;:!?')
    return text.strip()

VOICE = "en-US-JennyNeural"  # 美式英语，女声，非常自然

async def generate_one(entry, sem, audio_dir, progress, total, failed):
    async with sem:
        word_id, word_text = entry
        tts_text = clean_text_for_tts(word_text)
        out_path = os.path.join(audio_dir, f"{word_id}.mp3")
        # 强制重新生成（内容已变）
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

    entries = extract_words()
    total = len(entries)
    print(f"共 {total} 个单词，使用语音: {VOICE}")
    print()

    # 显示清理效果预览
    print("=== 清理效果预览（含括号的条目）===")
    for wid, wtext in entries:
        cleaned = clean_text_for_tts(wtext)
        if cleaned != wtext:
            print(f"  {wid}: '{wtext}' → '{cleaned}'")
    print()

    # 确认继续
    print("开始生成音频...")
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