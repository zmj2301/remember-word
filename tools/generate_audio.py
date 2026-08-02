"""
生成所有单词的高质量音频文件（使用 Microsoft Edge TTS 神经语音）
输出到 audio/ 目录，文件名为 {word.id}.mp3
"""
import asyncio
import edge_tts
import os
import sys
import time

# 从 dict.js 中提取所有单词 ID
def extract_words():
    dict_path = os.path.join(os.path.dirname(__file__), "..", "js", "dict.js")
    words = []
    with open(dict_path, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line.startswith("id:") or line.startswith('id:"'):
                # 提取 id 值
                # 格式: id: "ancient", 或 id:"ancient",
                id_val = line.split(":")[1].strip().strip('",')
                words.append(id_val)
    return words

VOICE = "en-US-JennyNeural"  # 美式英语，女声，非常自然
# 备选：en-US-AriaNeural (女), en-US-GuyNeural (男), en-GB-SoniaNeural (英式女)

async def generate_one(word, sem, audio_dir, progress, total, failed):
    async with sem:
        out_path = os.path.join(audio_dir, f"{word}.mp3")
        if os.path.exists(out_path) and os.path.getsize(out_path) > 1000:
            progress[0] += 1
            print(f"  [{progress[0]}/{total}] ✓ {word} (已存在)")
            return True
        try:
            tts = edge_tts.Communicate(word, VOICE)
            await tts.save(out_path)
            progress[0] += 1
            print(f"  [{progress[0]}/{total}] ✓ {word}")
            return True
        except Exception as e:
            progress[0] += 1
            failed.append(word)
            print(f"  [{progress[0]}/{total}] ✗ {word} - {e}")
            return False

async def main():
    audio_dir = os.path.join(os.path.dirname(__file__), "..", "audio")
    os.makedirs(audio_dir, exist_ok=True)

    words = extract_words()
    total = len(words)
    print(f"共 {total} 个单词，使用语音: {VOICE}")
    print(f"输出目录: {audio_dir}")
    print()

    # 并发控制：最多 5 个同时请求
    sem = asyncio.Semaphore(5)
    progress = [0]
    failed = []

    start = time.time()
    tasks = [generate_one(w, sem, audio_dir, progress, total, failed) for w in words]
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