"""
记单词工具 — Flask 后端
提供数据持久化 API：进度 / 设置 / 打卡 / 默写统计
数据存储：JSON 文件（单用户，无需数据库）
"""
import json
import pathlib

from flask import Flask, request, jsonify
from flask_cors import CORS

import config as C

app = Flask(__name__)
CORS(app, origins=C.CORS_ALLOWED_ORIGINS, allow_headers=["X-API-Key", "Content-Type"])


# ===================== 工具函数 =====================

def _check_api_key():
    """校验 X-API-Key 请求头"""
    key = request.headers.get("X-API-Key", "")
    if key != C.API_KEY:
        return False
    return True


def _read_json(filepath):
    """读取 JSON 文件，不存在时返回空值"""
    if not filepath.exists():
        return None
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            return json.load(f)
    except (json.JSONDecodeError, IOError):
        return None


def _write_json(filepath, data):
    """原子写 JSON 文件（先写临时文件再重命名，避免中断时损坏）"""
    filepath.parent.mkdir(parents=True, exist_ok=True)
    tmp = filepath.with_suffix(".tmp")
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    tmp.replace(filepath)


def _check_json_body():
    """校验请求体是合法 JSON，失败时返回 400"""
    try:
        return request.get_json(force=True)
    except Exception:
        return None


# ===================== API 端点 =====================

# ---- 通用：一次性读取/保存全部数据 ----
@app.route("/api/data", methods=["GET"])
def get_all_data():
    """获取全部数据（首次加载）"""
    if not _check_api_key():
        return jsonify({"error": "invalid api key"}), 401
    return jsonify({
        "progress": _read_json(C.PROGRESS_FILE) or {},
        "settings": _read_json(C.SETTINGS_FILE) or {},
        "dictationStats": _read_json(C.DICTATION_FILE) or {},
        "studyDays": _read_json(C.STUDY_DAYS_FILE) or []
    })


@app.route("/api/data", methods=["POST"])
def save_all_data():
    """保存全部数据（批量同步）"""
    if not _check_api_key():
        return jsonify({"error": "invalid api key"}), 401
    body = _check_json_body()
    if body is None:
        return jsonify({"error": "invalid json body"}), 400
    if "progress" in body:
        _write_json(C.PROGRESS_FILE, body["progress"])
    if "settings" in body:
        _write_json(C.SETTINGS_FILE, body["settings"])
    if "dictationStats" in body:
        _write_json(C.DICTATION_FILE, body["dictationStats"])
    if "studyDays" in body:
        _write_json(C.STUDY_DAYS_FILE, body["studyDays"])
    return jsonify({"status": "ok"})


# ---- 进度 ----
@app.route("/api/progress", methods=["GET"])
def get_progress():
    if not _check_api_key():
        return jsonify({"error": "invalid api key"}), 401
    return jsonify(_read_json(C.PROGRESS_FILE) or {})


@app.route("/api/progress", methods=["POST"])
def save_progress():
    if not _check_api_key():
        return jsonify({"error": "invalid api key"}), 401
    body = _check_json_body()
    if body is None:
        return jsonify({"error": "invalid json body"}), 400
    data = body.get("progress", {})
    if not isinstance(data, dict):
        return jsonify({"error": "progress must be an object"}), 400
    _write_json(C.PROGRESS_FILE, data)
    return jsonify({"status": "ok"})


# ---- 设置 ----
@app.route("/api/settings", methods=["GET"])
def get_settings():
    if not _check_api_key():
        return jsonify({"error": "invalid api key"}), 401
    return jsonify(_read_json(C.SETTINGS_FILE) or {})


@app.route("/api/settings", methods=["POST"])
def save_settings():
    if not _check_api_key():
        return jsonify({"error": "invalid api key"}), 401
    body = _check_json_body()
    if body is None:
        return jsonify({"error": "invalid json body"}), 400
    _write_json(C.SETTINGS_FILE, body)
    return jsonify({"status": "ok"})


# ---- 打卡天数 ----
@app.route("/api/study-days", methods=["GET"])
def get_study_days():
    if not _check_api_key():
        return jsonify({"error": "invalid api key"}), 401
    return jsonify(_read_json(C.STUDY_DAYS_FILE) or [])


@app.route("/api/study-days", methods=["POST"])
def save_study_days():
    if not _check_api_key():
        return jsonify({"error": "invalid api key"}), 401
    body = _check_json_body()
    if body is None:
        return jsonify({"error": "invalid json body"}), 400
    data = body.get("studyDays", [])
    if not isinstance(data, list):
        return jsonify({"error": "studyDays must be an array"}), 400
    _write_json(C.STUDY_DAYS_FILE, data)
    return jsonify({"status": "ok"})


# ---- 默写统计 ----
@app.route("/api/dictation-stats", methods=["GET"])
def get_dictation_stats():
    if not _check_api_key():
        return jsonify({"error": "invalid api key"}), 401
    return jsonify(_read_json(C.DICTATION_FILE) or {})


@app.route("/api/dictation-stats", methods=["POST"])
def save_dictation_stats():
    if not _check_api_key():
        return jsonify({"error": "invalid api key"}), 401
    body = _check_json_body()
    if body is None:
        return jsonify({"error": "invalid json body"}), 400
    _write_json(C.DICTATION_FILE, body)
    return jsonify({"status": "ok"})


# ---- 重置 ----
@app.route("/api/reset", methods=["DELETE"])
def reset_all():
    if not _check_api_key():
        return jsonify({"error": "invalid api key"}), 401
    for f in [C.PROGRESS_FILE, C.DICTATION_FILE, C.STUDY_DAYS_FILE]:
        if f.exists():
            f.unlink()
    return jsonify({"status": "ok"})


# ===================== 启动 =====================
if __name__ == "__main__":
    print(f"[backend] CORS origins: {C.CORS_ALLOWED_ORIGINS}")
    print(f"[backend] API key: {'*' * 6 + '...' if C.API_KEY != 'your-secret-api-key-here' else '⚠️  默认值未改！请设置 VOCAB_API_KEY 环境变量'}")
    print(f"[backend] data dir: {C.DATA_DIR}")
    app.run(host="0.0.0.0", port=5000, debug=True)
