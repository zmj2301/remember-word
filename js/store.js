/**
 * 数据存储模块 — 双写模式
 *
 * 策略：
 *   - localStorage 是即时源（读写都在本地）
 *   - 写操作同时触发异步同步到后端 API
 *   - 应用启动时从 API 拉取数据并合并到 localStorage
 *   - API 不可用时自动降级为纯 localStorage 模式
 *
 * 配置方式（在 index.html 中定义 window.API_CONFIG）：
 *   const API_CONFIG = {
 *     backendUrl: "https://your-server.com/api",
 *     apiKey: "your-secret-api-key"
 *   };
 */
const Store = (() => {
  const PROGRESS_KEY = "vocab_progress_v1";
  const SETTINGS_KEY = "vocab_settings_v1";
  const DICTATION_KEY = "vocab_dictation_stats_v1";
  const STUDY_DAYS_KEY = "vocab_study_days_v1";

  // ---- 后端 API ----
  var _apiBase = (window.API_CONFIG && window.API_CONFIG.backendUrl) || null;
  var _apiKey = (window.API_CONFIG && window.API_CONFIG.apiKey) || null;
  var _apiReady = false;     // 已加载过 API 数据
  var _syncTimer = null;     // 防抖同步定时器
  var _isSyncing = false;    // 正在同步中

  function _hasApi() {
    return _apiBase !== null && _apiKey !== null;
  }

  function _apiHeaders() {
    return {
      "Content-Type": "application/json",
      "X-API-Key": _apiKey
    };
  }

  function _apiFetch(path, options) {
    if (!_hasApi()) return null;
    return fetch(_apiBase + path, Object.assign({}, options, { headers: _apiHeaders() }));
  }

  // ---- 初始化：从 API 拉取数据到 localStorage ----
  function loadFromApi() {
    if (!_hasApi() || _apiReady) return Promise.resolve(false);
    return _apiFetch("/data")
      .then(function (resp) {
        if (!resp.ok) return resp.json().then(function (e) { throw new Error(e.error || "HTTP " + resp.status); });
        return resp.json();
      })
      .then(function (data) {
        // 合并：API 数据覆盖 localStorage（但合并 settings 默认值）
        if (data.progress) localStorage.setItem(PROGRESS_KEY, JSON.stringify(data.progress));
        if (data.settings) localStorage.setItem(SETTINGS_KEY, JSON.stringify(data.settings));
        if (data.dictationStats) localStorage.setItem(DICTATION_KEY, JSON.stringify(data.dictationStats));
        if (data.studyDays) localStorage.setItem(STUDY_DAYS_KEY, JSON.stringify(data.studyDays));
        _apiReady = true;
        console.log("[Store] API 数据已同步到本地");
        return true;
      })
      .catch(function (err) {
        console.warn("[Store] API 加载失败，使用本地数据：", err.message);
        return false;
      });
  }

  // ---- 写 localStorage + 调度同步 ----
  function _scheduleSync() {
    if (!_hasApi() || _isSyncing) return;
    clearTimeout(_syncTimer);
    _syncTimer = setTimeout(function () { _doSync(); }, 1500);
  }

  function _doSync() {
    _isSyncing = true;
    var body = {
      progress: _readRaw(PROGRESS_KEY, "{}"),
      settings: _readRaw(SETTINGS_KEY, "{}"),
      dictationStats: _readRaw(DICTATION_KEY, '{"sessions":[]}'),
      studyDays: _readRaw(STUDY_DAYS_KEY, "[]")
    };
    _apiFetch("/data", {
      method: "POST",
      body: JSON.stringify(body)
    }).then(function (resp) {
      _isSyncing = false;
      if (!resp.ok) {
        return resp.json().then(function (e) {
          console.warn("[Store] 同步到后端失败：", e.error || "HTTP " + resp.status);
          _isSyncing = false;
        });
      }
      console.log("[Store] 数据已同步到后端");
      _isSyncing = false;
      // 如果还有未完成同步的数据，继续同步
      // （这里简化：单次同步后清除定时器）
    }).catch(function (err) {
      _isSyncing = false;
      console.warn("[Store] 网络不可用，同步中断：", err.message);
    });
  }

  function _readRaw(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key) || fallback); }
    catch (e) { return JSON.parse(fallback); }
  }

  // ===================== 公开接口 =====================

  /** 读取全部学习进度 { wordId: progressObj } */
  function getAllProgress() {
    try {
      return JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}");
    } catch (e) {
      console.error("读取进度失败：", e);
      return {};
    }
  }

  /** 保存全部学习进度（立即写本地 + 调度同步） */
  function saveAllProgress(all) {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(all));
    } catch (e) {
      console.error("保存进度失败：", e);
      alert("保存学习进度失败，浏览器存储空间可能不足。");
      return;
    }
    _scheduleSync();
  }

  /** 读取单个词的进度 */
  function getProgress(wordId) {
    return getAllProgress()[wordId] || null;
  }

  /** 保存单个词的进度（立即写本地 + 调度同步） */
  function setProgress(wordId, progress) {
    var all = getAllProgress();
    all[wordId] = progress;
    saveAllProgress(all);
  }

  /** 读取设置 */
  function getSettings() {
    try {
      return Object.assign(
        { dailyNewLimit: 10, selectedUnit: "all" },
        JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}")
      );
    } catch (e) {
      return { dailyNewLimit: 10, selectedUnit: "all" };
    }
  }

  /** 保存设置（立即写本地 + 调度同步） */
  function saveSettings(settings) {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
      console.error("保存设置失败：", e);
      return;
    }
    _scheduleSync();
  }

  /** 导出全部数据为 JSON 文本（备份用） */
  function exportData() {
    return JSON.stringify(
      {
        version: 1,
        exportedAt: new Date().toISOString(),
        progress: getAllProgress(),
        settings: getSettings(),
        dictationStats: getDictationStats(),
        studyDays: getStudyDays()
      },
      null,
      2
    );
  }

  /** 从 JSON 文本导入数据（覆盖，并同步到后端） */
  function importData(jsonText) {
    try {
      var data = JSON.parse(jsonText);
      if (data.progress) saveAllProgress(data.progress);
      if (data.settings) saveSettings(data.settings);
      if (data.dictationStats) saveDictationStats(data.dictationStats);
      if (data.studyDays) {
        var days = Array.isArray(data.studyDays) ? data.studyDays : [];
        localStorage.setItem(STUDY_DAYS_KEY, JSON.stringify(days));
        _scheduleSync();
      }
    } catch (e) {
      console.error("导入数据失败：", e);
      throw e;
    }
  }

  /** 清空全部进度（慎用，重置学习）——同时清空后端 */
  function resetAll() {
    localStorage.removeItem(PROGRESS_KEY);
    localStorage.removeItem(DICTATION_KEY);
    localStorage.removeItem(STUDY_DAYS_KEY);
    // 不删除 SETTINGS_KEY：保留用户设置的每日新词数量等偏好
    // 同步到后端
    if (_hasApi()) {
      _apiFetch("/reset", { method: "DELETE" })
        .catch(function () {
          console.warn("[Store] 后端重置失败，但本地已清空");
        });
    }
  }

  /** 记录今天学习了（去重） */
  function recordStudyDay() {
    try {
      var days = JSON.parse(localStorage.getItem(STUDY_DAYS_KEY) || "[]");
      var today = new Date();
      var tz = today.getTimezoneOffset() * 60000;
      var todayStr = new Date(today - tz).toISOString().slice(0, 10);
      if (days.indexOf(todayStr) === -1) {
        days.push(todayStr);
        localStorage.setItem(STUDY_DAYS_KEY, JSON.stringify(days));
        _scheduleSync();
      }
    } catch (e) {
      console.error("记录学习天数失败：", e);
    }
  }

  /** 获取所有学习日期数组 */
  function getStudyDays() {
    try {
      return JSON.parse(localStorage.getItem(STUDY_DAYS_KEY) || "[]");
    } catch (e) {
      return [];
    }
  }

  /** 读取纯默写统计 */
  function getDictationStats() {
    try {
      return JSON.parse(localStorage.getItem(DICTATION_KEY) || '{"sessions":[]}');
    } catch (e) {
      return { sessions: [] };
    }
  }

  /** 保存纯默写统计（立即写本地 + 调度同步） */
  function saveDictationStats(stats) {
    try {
      localStorage.setItem(DICTATION_KEY, JSON.stringify(stats));
    } catch (e) {
      console.error("保存纯默写统计失败：", e);
      return;
    }
    _scheduleSync();
  }

  // 清理未使用的同步定时器（用户离开页面时）
  function _dispose() {
    clearTimeout(_syncTimer);
    if (!_isSyncing) return;
    // 正在同步中，等待完成；无法强制取消
  }

  if (typeof window !== "undefined") {
    window.addEventListener("beforeunload", _dispose);
  }

  return {
    loadFromApi,
    getAllProgress,
    getProgress,
    setProgress,
    getSettings,
    saveSettings,
    exportData,
    importData,
    resetAll,
    getDictationStats,
    saveDictationStats,
    recordStudyDay,
    getStudyDays
  };
})();

window.Store = Store;
