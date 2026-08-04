"""
记单词工具 — 后端配置
数据持久化 + API Key 保护 + CORS
"""
import os
import pathlib

# API Key（部署时通过环境变量设置，不要写在代码里）
API_KEY = os.environ.get("VOCAB_API_KEY", "your-secret-api-key-here")

# 允许访问的域名（CORS）
# 部署到 GitHub Pages 后修改为实际域名
CORS_ALLOWED_ORIGINS = os.environ.get(
    "VOCAB_CORS_ORIGINS",
    "http://localhost:5500,http://127.0.0.1:5500"
).split(",")

# 数据存储目录（与 server/ 同级的 data/）
BASE_DIR = pathlib.Path(__file__).resolve().parent
DATA_DIR = BASE_DIR.parent / "data"
DATA_DIR.mkdir(exist_ok=True)

# 进度文件
PROGRESS_FILE = DATA_DIR / "progress.json"
SETTINGS_FILE = DATA_DIR / "settings.json"
DICTATION_FILE = DATA_DIR / "dictation.json"
STUDY_DAYS_FILE = DATA_DIR / "study_days.json"
