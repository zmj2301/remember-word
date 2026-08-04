# 后端部署说明

## 目录结构
```
remember-word/
├── server/
│   ├── app.py            # Flask 主应用
│   ├── config.py         # 配置
│   └── requirements.txt  # Python 依赖
├── data/                 # 数据文件（自动创建）
└── index.html            # 前端
```

## 安装依赖
```bash
cd server
pip install -r requirements.txt
```

## 启动

### 开发（本机测试）
```bash
cd server
python app.py
```
监听 `http://0.0.0.0:5000`

### 生产（VPS + gunicorn）
```bash
export VOCAB_API_KEY="你的密钥"
export VOCAB_CORS_ORIGINS="https://zmj2301.github.io"

cd /path/to/remember-word
gunicorn -w 2 -b 0.0.0.0:5000 server.app:app
```

## Nginx 反向代理（推荐）
```nginx
server {
    listen 443 ssl;
    server_name vocab.example.com;
    ssl_certificate     /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location /api/ {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 前端配置
在 `index.html` 中修改 `API_CONFIG`：
```js
const API_CONFIG = {
  backendUrl: "https://vocab.example.com/api",
  apiKey: "你的密钥"
};
```

## API 端点

| 方法 | 路径 | 用途 |
|------|------|------|
| GET | `/api/data` | 获取全部数据 |
| POST | `/api/data` | 保存全部数据（批量同步） |
| GET | `/api/progress` | 获取进度 |
| POST | `/api/progress` | 保存进度 |
| GET | `/api/settings` | 获取设置 |
| POST | `/api/settings` | 保存设置 |
| GET | `/api/study-days` | 获取打卡天数 |
| POST | `/api/study-days` | 保存打卡天数 |
| GET | `/api/dictation-stats` | 获取默写统计 |
| POST | `/api/dictation-stats` | 保存默写统计 |
| DELETE | `/api/reset` | 清空全部数据 |

所有请求需在 `X-API-Key` 请求头中传入密钥。
