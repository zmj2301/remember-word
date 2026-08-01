/**
 * 本地存储模块
 * 负责读写 localStorage：学习进度 + 设置
 * 所有数据存学习机本地，关闭浏览器不丢失。
 */
const Store = (() => {
  const PROGRESS_KEY = "vocab_progress_v1";
  const SETTINGS_KEY = "vocab_settings_v1";
  const DICTATION_KEY = "vocab_dictation_stats_v1";

  /** 读取全部学习进度 { wordId: progressObj } */
  function getAllProgress() {
    try {
      return JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}");
    } catch (e) {
      console.error("读取进度失败：", e);
      return {};
    }
  }

  /** 保存全部学习进度 */
  function saveAllProgress(all) {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(all));
    } catch (e) {
      console.error("保存进度失败：", e);
      alert("保存学习进度失败，浏览器存储空间可能不足。");
    }
  }

  /** 读取单个词的进度 */
  function getProgress(wordId) {
    return getAllProgress()[wordId] || null;
  }

  /** 保存单个词的进度 */
  function setProgress(wordId, progress) {
    const all = getAllProgress();
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

  /** 保存设置 */
  function saveSettings(settings) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }

  /** 导出全部数据为 JSON 文本（备份用） */
  function exportData() {
    return JSON.stringify(
      {
        version: 1,
        exportedAt: new Date().toISOString(),
        progress: getAllProgress(),
        settings: getSettings()
      },
      null,
      2
    );
  }

  /** 从 JSON 文本导入数据（覆盖） */
  function importData(jsonText) {
    const data = JSON.parse(jsonText);
    if (data.progress) saveAllProgress(data.progress);
    if (data.settings) saveSettings(data.settings);
  }

  /** 清空全部进度（慎用，重置学习） */
  function resetAll() {
    localStorage.removeItem(PROGRESS_KEY);
  }

  /** 读取纯默写统计 */
  function getDictationStats() {
    try {
      return JSON.parse(localStorage.getItem(DICTATION_KEY) || '{"sessions":[]}');
    } catch (e) {
      return { sessions: [] };
    }
  }

  /** 保存纯默写统计 */
  function saveDictationStats(stats) {
    try {
      localStorage.setItem(DICTATION_KEY, JSON.stringify(stats));
    } catch (e) {
      console.error("保存纯默写统计失败：", e);
    }
  }

  return {
    getAllProgress,
    getProgress,
    setProgress,
    getSettings,
    saveSettings,
    exportData,
    importData,
    resetAll,
    getDictationStats,
    saveDictationStats
  };
})();

// 暴露到全局，供 app.js 使用
window.Store = Store;
