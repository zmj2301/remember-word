"""
为自然拼读的每个独特分段生成 Edge TTS 音频文件
输出到 audio/ph_ 目录，文件名为 ph_{segment}.mp3

例如: he → audio/ph_he.mp3, llo → audio/ph_llo.mp3
"""
import asyncio
import edge_tts
import os
import re
import json
import time
import sys

DICT_PATH = os.path.join(os.path.dirname(__file__), "..", "js", "dict.js")
PHONICS_PATH = os.path.join(os.path.dirname(__file__), "..", "js", "phonics.js")
AUDIO_DIR = os.path.join(os.path.dirname(__file__), "..", "audio")

VOICE = "en-US-JennyNeural"


def extract_segments():
    """从 phonics.js 中提取所有独特分段"""
    with open(PHONICS_PATH, "r", encoding="utf-8") as f:
        content = f.read()
    m = re.search(r'const PHONICS = (\{.*?\});', content, re.DOTALL)
    if not m:
        print("ERROR: 无法解析 phonics.js")
        sys.exit(1)
    data = json.loads(m.group(1))

    segments = set()
    for wid, phonics in data.items():
        if not phonics or '-' not in phonics:
            continue
        tokens = phonics.split(' ')
        for token in tokens:
            parts = token.split('-')
            for p in parts:
                p = p.strip()
                if p and re.match(r'^[a-zA-Z]+$', p) and p.lower() not in ('sb', 'sth'):
                    segments.add(p.lower())
    return sorted(segments)


async def generate_one(segment, sem, audio_dir, progress, total, failed):
    async with sem:
        out_path = os.path.join(audio_dir, f"ph_{segment}.mp3")
        # 如果已存在则跳过
        if os.path.exists(out_path):
            progress[0] += 1
            return True
        try:
            tts = edge_tts.Communicate(segment, VOICE)
            await tts.save(out_path)
            progress[0] += 1
            print(f"  [{progress[0]}/{total}] ✓ {segment} → ph_{segment}.mp3")
            return True
        except Exception as e:
            progress[0] += 1
            failed.append(segment)
            print(f"  [{progress[0]}/{total}] ✗ {segment} - {e}")
            return False


async def main():
    audio_dir = AUDIO_DIR
    os.makedirs(audio_dir, exist_ok=True)

    segments = extract_segments()
    total = len(segments)
    print(f"共 {total} 个独特分段，使用语音: {VOICE}")
    print()

    # 确认
    print("开始生成分段音频...")
    sem = asyncio.Semaphore(5)
    progress = [0]
    failed = []

    start = time.time()
    tasks = [generate_one(s, sem, audio_dir, progress, total, failed) for s in segments]
    await asyncio.gather(*tasks)
    elapsed = time.time() - start

    print(f"\n完成！耗时 {elapsed:.1f} 秒")
    print(f"成功: {total - len(failed)}/{total}")
    if failed:
        print(f"失败: {len(failed)} 个")
        for s in failed:
            print(f"  - {s}")
        sys.exit(1)


if __name__ == "__main__":
    asyncio.run(main())