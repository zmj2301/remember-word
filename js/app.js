/**
 * 主应用逻辑
 * 串联词库 / SRS 算法 / 存储 / 手势，实现：
 *   - 每日打开 → 计算复习队列 + 新词队列
 *   - 卡片学习：展示 6 类信息 → 上滑进入默写 → 看中文打英文 → 对错判断 → 更新进度
 *   - 统计页：今日完成、待复习、已掌握等
 *   - 设置 / 数据导出导入
 */
(() => {
  // ===================== SRS 算法（内联） =====================
  const INTERVALS = [1, 2, 4, 7, 15]; // 5 次复习间隔
  const MASTERED_STAGE = 5; // stage 累计 5 次答对（0→1→2→3→4→5）即掌握

  function todayStr() {
    const d = new Date();
    const tz = d.getTimezoneOffset() * 60000;
    return new Date(d - tz).toISOString().slice(0, 10);
  }

  function addDays(dateStr, days) {
    const d = new Date(dateStr + "T00:00:00");
    d.setDate(d.getDate() + days);
    const tz = d.getTimezoneOffset() * 60000;
    return new Date(d - tz).toISOString().slice(0, 10);
  }

  function isDue(progress) {
    if (!progress) return false;
    if (progress.stage >= MASTERED_STAGE) return false;
    return progress.dueDate <= todayStr();
  }

  // ===================== 语音朗读 =====================
  var _playbackRate = 1.2; // 默认 1.5x（实际倍率）

  function speak(wordId, onEnd) {
    var audio = new Audio("audio/" + wordId + ".mp3");
    audio.playbackRate = _playbackRate;
    audio.play();
    // 按钮动画反馈
    var btn = $("#play-btn");
    if (btn) { btn.classList.add("playing"); }
    audio.onended = function () {
      if (btn) { btn.classList.remove("playing"); }
      if (onEnd) onEnd();
    };
  }
  /** 朗读例句（sentence_{wordId}.mp3） */
  function speakSentence(wordId, onEnd) {
    if (!wordId) return;
    var audio = new Audio("audio/sentence_" + wordId + ".mp3");
    audio.playbackRate = _playbackRate;
    audio.play();
    // 例句按钮动画反馈
    var btn = $("#example-play-btn");
    if (btn) { btn.classList.add("playing"); }
    audio.onended = function () {
      if (btn) { btn.classList.remove("playing"); }
      if (onEnd) onEnd();
    };
  }
  // 暴露到全局，供临时卡片的 onclick 使用
  window.speak = speak;
  window.speakSentence = speakSentence;
  window.setSpeed = setSpeed;

  function setSpeed(rate) {
    _playbackRate = rate;
    var btn1x = $("#speed-1x");
    var btn15x = $("#speed-1-5x");
    if (btn1x) btn1x.classList.toggle("active", rate === 0.8);
    if (btn15x) btn15x.classList.toggle("active", rate === 1.2);
  }

  function createNewProgress() {
    const today = todayStr();
    return {
      stage: 0,
      dueDate: addDays(today, INTERVALS[0]),
      learnedDate: today,
      history: []
    };
  }

  function recordAnswer(progress, resultType) {
    // resultType: "correct" | "incomplete" | "pending_correction"
    const p = { ...progress, history: [...progress.history] };
    const today = todayStr();
    p.history.push({ date: today, result: resultType });

    if (resultType === "correct") {
      if (p.stage < MASTERED_STAGE) {
        p.stage += 1;
        if (p.stage >= MASTERED_STAGE) {
          p.dueDate = null; // 已掌握
        } else {
          p.dueDate = addDays(today, INTERVALS[p.stage - 1]);
        }
      }
    } else {
      // "incomplete" 或 "pending_correction"：不改 stage，明天再复习
      p.dueDate = addDays(today, 1);
    }
    return p;
  }

  function isMastered(progress) {
    return progress && progress.stage >= MASTERED_STAGE;
  }

  function stageText(progress) {
    if (!progress) return "未学习";
    if (progress.stage >= MASTERED_STAGE) return "已掌握 ✨";
    if (progress.stage === 0) return "新词";
    return `已复习 ${progress.stage}/5 次`;
  }

  // ===================== 依赖的全局模块 =====================
  const DICT = window.DICTIONARY;
  const Store = window.Store;

  // ===================== 状态 =====================
  let currentScreen = "home";
  let studyQueue = [];
  let queueIndex = 0;
  let currentMode = "new";      // 队列项的模式：新词/复习
  let cardPhase = "learn";      // 卡片阶段：学习/默写/结果
  let appMode = "write";        // 应用模式："write" 默写 | "browse" 浏览 | "dictation" 纯默写
  let lastResult = null;        // 当前题最近一次判题结果：true 对 / false 错
  let skipAttempts = 0;         // 当前词跳过确认次数（第 1 次驳回，第 2 次确认）
  // 纯默写模式 session 记录
  let dictationSession = [];    // [{wordId, correct: bool}, ...] 临时记录本次纯默写结果
  let dictationWrongIds = [];   // 当前待更正的错词 id 列表

  const $ = (sel) => document.querySelector(sel);

  // ===================== 卡片滑动动画 =====================
  // TikTok 式连续滚动：当前卡片与下一张同时存在，_sliderY 统一控制位置
  // 关键：手势可以打断动画——手指一碰，动画立即停止并从当前位置跟手
  let _rafId = null;          // 当前动画的 requestAnimationFrame id（用于取消）
  let _animatingDir = 0;      // 动画方向：+1 向下翻页，-1 向上翻页，0 静止
  let _animTargetTempId = null; // 正在动画中的临时卡片 id（手势打断时需清理）
  const cardSlider = document.getElementById("card-slider");
  const SLIDE_MS = 300;
  let _sliderY = 0;
  let _gestureStartY = 0;   // 手势开始时的 _sliderY（拖拽基准）
  let _tempCardId = 0;

  function sliderHeight() {
    var h = cardSlider.parentElement.clientHeight;
    if (!h || h < 10) h = window.innerHeight || 600;
    return h;
  }

  function setSliderY(y) {
    _sliderY = y;
    cardSlider.style.transform = "translate3d(0," + _sliderY + "px,0)";
  }

  // 是否有动画/惯性正在进行（可供外部判断是否阻止某些行为）
  function isAnimating() {
    return _rafId !== null;
  }

  // 取消当前动画：清除 rAF，清理临时卡片，把 _sliderY 落在当前显示位置
  function cancelAnimation() {
    if (_rafId !== null) {
      cancelAnimationFrame(_rafId);
      _rafId = null;
    }
    _animatingDir = 0;
    // 清理可能残留的临时卡片
    if (_animTargetTempId) {
      var el = document.getElementById(_animTargetTempId);
      if (el) el.remove();
      _animTargetTempId = null;
    }
  }

  // requestAnimationFrame 动画（ease-out 缓出）。返回是否完整跑完（true=没被打断）
  function slideAnimate(from, to, dur, cb) {
    cancelAnimationFrame(_rafId);
    var t0 = null;
    var completed = false;
    function tick(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setSliderY(from + (to - from) * e);
      if (p < 1) {
        _rafId = requestAnimationFrame(tick);
      } else {
        _rafId = null;
        completed = true;
        if (cb) cb();
      }
    }
    _rafId = requestAnimationFrame(tick);
    return completed;
  }

  // 跟手拖拽：手指开始触碰时已调用 onGestureStart 取消了动画
  function onDrag(deltaY) {
    // deltaY 是本次手势从起点到当前的累计位移
    var h = sliderHeight();
    var rawY = _gestureStartY + deltaY;
    // 弹性阻尼：拖拽超出 [-h, 0] 边界时产生阻力
    if (rawY > 0) {
      rawY = rawY * 0.3; // 下拉（看上一个）阻力
    } else if (rawY < -h) {
      rawY = -h + (rawY + h) * 0.3; // 上拉（看下一个）阻力
    }
    setSliderY(rawY);

    // 实时提示
    if (rawY < -h * 0.15) {
      setHint("松开切换到下一个", false);
    } else if (rawY > h * 0.15) {
      setHint("松开回看上一个", false);
    } else if (appMode === "browse") {
      setHint("上滑看下一个 ↑", false);
    } else if (appMode === "dictation") {
      setHint("上滑录入答案 · 全部完成后统一批改", false);
    } else if (cardPhase === "learn") {
      setHint("上滑下一词 · 左滑开始默写", false);
    } else if (cardPhase === "write") {
      setHint("输入后提交或上滑检查 ↑", false);
    } else {
      setHint("上滑下一个 · 右滑看解释", false);
    }
  }

  // 手势开始：取消任何进行中的动画，记录基准点，预渲染目标卡片
  function onGestureStart() {
    // 如果动画正在进行，判断方向决定保留哪张预渲染卡片
    var h = sliderHeight();
    cancelAnimation(); // 清除动画和临时卡片
    // 记录当前 _sliderY 作为拖拽基准
    _gestureStartY = _sliderY;

    // 预渲染：当 _sliderY 走到 -h 时（上滑下一个）需要在 +h 处有下一张
    // 当 _sliderY 走到 +h 时（下滑上一个）需要在 -h 处有上一张
    // 这里只在 _sliderY 接近 0 时预渲染，避免重复创建
    if (Math.abs(_sliderY) < 5) {
      // 静止状态开始拖拽：提前准备好上一张/下一张占位（在 onRelease 时按方向创建更稳妥，这里不做）
    }
  }

  // 释放手势：判断是否翻页（垂直）或切换页面（水平）
  // 注意：SwipeDetector 传入 (dx, dy, vx, vy)
  function onRelease(dx, dy, vx, vy) {
    var h = sliderHeight();
    var curY = _sliderY;

    // 先判断水平滑动（左/右）——只在水平位移明显大于垂直时才触发
    var hDom = Math.abs(dx);
    var vDom = Math.abs(dy);
    if (hDom > vDom && (hDom > 50 || Math.abs(vx) > 0.4)) {
      // 水平滑动 → 先弹回原位，再切换默写/学习面
      // 不需要翻页，所以直接弹回 0 并切换 phase
      setSliderY(0);
      if (dx < 0) {
        onSwipeLeft();
      } else {
        onSwipeRight();
      }
      return;
    }

    // 垂直翻页：slider 走到负方向（curY < 0）或上滑速度足够
    var goNext = curY < -h * 0.25 || vy < -0.3;
    var goPrev = curY > h * 0.25 || vy > 0.3;

    if (goNext) {
      // 业务逻辑拦截（默写模式下的特殊处理）
      if (appMode !== "browse") {
        if (cardPhase === "write") {
          // 默写面 → 先提交判分
          slideAnimate(curY, 0, 150, function() {});
          submitWrite();
          return;
        }
        if (cardPhase === "result") {
          // 结果面答错 → 标记"待更正"再进入下一个
          if (lastResult === false) {
            var w = studyQueue[queueIndex].word;
            var pg = Store.getProgress(w.id);
            if (!pg) pg = createNewProgress();
            pg = recordAnswer(pg, "pending_correction");
            Store.setProgress(w.id, pg);
          }
          commitToNextWord();
          return;
        }
        // learn 面：所有模式上滑都是下一词，左右滑控制默写切换
      }
      commitToNextWord();
    } else if (goPrev) {
      commitToPrevWord();
    } else {
      // 未达阈值，弹回当前位置
      slideAnimate(curY, 0, 150, function() {});
    }
  }

  // 创建临时卡片页面（用于过渡动画）
  function createTempCard(word, offsetY) {
    _tempCardId++;
    var id = "temp-card-" + _tempCardId;
    var div = document.createElement("div");
    div.id = id;
    div.className = "card-face";
    var html = '';
    if (word.emoji) html += '<div class="card-emoji">' + word.emoji + '</div>';
    else html += '<div class="card-emoji"></div>';
    html += '<div class="card-word-row"><div class="card-word">' + (word.word || '') + '</div><span class="play-btn" onclick="speak(\'' + word.id + '\')">🔊</span><span class="speed-btn' + (_playbackRate === 0.8 ? ' active' : '') + '" onclick="window.setSpeed(0.8)">1x</span><span class="speed-btn' + (_playbackRate === 1.2 ? ' active' : '') + '" onclick="window.setSpeed(1.2)">1.5x</span></div>';
    html += '<div class="card-phonetic">' + (word.phonetic || '') + '</div>';
    html += '<div class="card-meaning">' + (word.pos ? word.pos + ' ' : '') + (word.meaning || '') + '</div>';
    if (word.root) {
      html += '<div class="card-block"><div class="block-title">🌱 词根</div><div class="block-text">' + word.root + '</div></div>';
    }
    if (word.mnemonic) {
      html += '<div class="card-block"><div class="block-title">💡 联想</div><div class="block-text">' + word.mnemonic + '</div></div>';
    }
    if (word.example || word.exampleTrans) {
      html += '<div class="card-block"><div class="block-title">📖 例句</div>';
      if (word.example) html += '<div class="block-text example-en">' + word.example + '</div>';
      if (word.exampleTrans) html += '<div class="block-text example-zh">' + word.exampleTrans + '</div>';
      html += '</div>';
    }
    var progress = Store.getProgress(word.id);
    html += '<div class="stage-tag">' + (progress ? stageText(progress) : '未学习') + '</div>';
    div.innerHTML = html;
    div.style.transform = "translateY(" + offsetY + "px)";
    div.style.display = "flex";
    cardSlider.appendChild(div);
    return id;
  }

  // 纯默写模式专用临时卡片：只显示释义和输入框占位，与真实默写面一致
  function createTempDictationCard(word, offsetY) {
    _tempCardId++;
    var id = "temp-card-" + _tempCardId;
    var div = document.createElement("div");
    div.id = id;
    div.className = "card-face";
    var html = '<div class="write-emoji">✍️</div>';
    html += '<div class="write-meaning" style="font-size:22px;font-weight:700;color:#1a1a2e;text-align:center;margin:12px 0 20px;">' + (word.pos ? word.pos + ' ' : '') + word.meaning + '</div>';
    html += '<div class="write-input" style="border:1.5px solid #ddd;border-radius:12px;padding:14px;font-size:20px;width:100%;background:#f9f9f9;color:#999;text-align:center;">输入答案...</div>';
    div.innerHTML = html;
    div.style.transform = "translateY(" + offsetY + "px)";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.style.padding = "16px 20px 80px";
    cardSlider.appendChild(div);
    return id;
  }

  // 翻到下一个词：预渲染下一张卡片在 +h，动画从 curY → -h
  function commitToNextWord() {
    if (queueIndex >= studyQueue.length - 1) { finishStudy(); return; }
    var h = sliderHeight();
    var nextItem = studyQueue[queueIndex + 1];
    if (!nextItem) { finishStudy(); return; }
    cancelAnimation();
    // 纯默写模式：使用默写面风格的临时卡片，动画过渡无缝
    _animTargetTempId = (appMode === "dictation")
      ? createTempDictationCard(nextItem.word, h)
      : createTempCard(nextItem.word, h);

    slideAnimate(_sliderY, -h, SLIDE_MS, function() {
      queueIndex++;
      if (appMode === "dictation") {
        renderPureDictation();
      } else {
        renderCard();
      }
      // 记单词/自由刷题模式：滑动后自动播放单词 + 例句
      if (appMode === "browse" || appMode === "free") {
        var autoWord = studyQueue[queueIndex].word;
        setTimeout(function() { speak(autoWord.id, function() { speakSentence(autoWord.id); }); }, 200);
      }
      if (_animTargetTempId) {
        var el = document.getElementById(_animTargetTempId);
        if (el) el.remove();
        _animTargetTempId = null;
      }
      setSliderY(0);
      _gestureStartY = 0;
    });
  }

  // 翻到上一个词：预渲染上一张卡片在 -h，动画从 curY → +h
  function commitToPrevWord() {
    if (queueIndex <= 0) { setSliderY(0); return; }
    // 纯默写模式：使用默写面风格的临时卡片，动画过渡无缝
    var h = sliderHeight();
    var prevItem = studyQueue[queueIndex - 1];
    if (!prevItem) { setSliderY(0); return; }
    cancelAnimation();
    _animTargetTempId = (appMode === "dictation")
      ? createTempDictationCard(prevItem.word, -h)
      : createTempCard(prevItem.word, -h);

    slideAnimate(_sliderY, h, SLIDE_MS, function() {
      queueIndex--;
      if (appMode === "dictation") {
        renderPureDictation();
      } else {
        renderCard();
      }
      // 记单词/自由刷题模式：滑动后自动播放单词 + 例句
      if (appMode === "browse" || appMode === "free") {
        var autoWord = studyQueue[queueIndex].word;
        setTimeout(function() { speak(autoWord.id, function() { speakSentence(autoWord.id); }); }, 200);
      }
      if (_animTargetTempId) {
        var el = document.getElementById(_animTargetTempId);
        if (el) el.remove();
        _animTargetTempId = null;
      }
      setSliderY(0);
      _gestureStartY = 0;
    });
  }

  // 底部一行小字提示
  function setHint(msg, warn) {
    $("#card-slide-hint").textContent = msg;
    $("#card-slide-hint").classList.toggle("warn", !!warn);
  }

  // 用 inline style 直接控制显隐
  function showCardFace(id, extra) {
    ["card-learn", "card-write", "card-result"].forEach(function (fid) {
      var el = document.getElementById(fid);
      if (fid === id) {
        el.style.display = "flex";
        el.classList.add("active");
      } else {
        el.style.display = "none";
        el.classList.remove("active");
      }
    });
    if (extra) document.getElementById(id).className = "card-face active " + extra;
  }

  // 未完成：history 记 incomplete、stage 不变、dueDate 明天兜底
  function markIncomplete(progress) {
    var p = { ...progress, history: [...progress.history] };
    var today = todayStr();
    p.history.push({ date: today, result: "incomplete" });
    p.dueDate = addDays(today, INTERVALS[0]);
    return p;
  }

  // 旧接口保留兼容（但内部不再使用两段式动画）
  function animateToNextWord() {
    commitToNextWord();
  }

  function slideToNextWord() {
    if (queueIndex >= studyQueue.length - 1) { finishStudy(); return; }
    commitToNextWord();
  }

  function slideToPrevWord() {
    if (queueIndex <= 0) return;
    commitToPrevWord();
  }

  // ===================== 队列计算 =====================
  function unitFilter(word) {
    var sel = Store.getSettings().selectedUnit || "all";
    if (sel === "all") return true;
    return word.unit === sel;
  }

  function buildTodayQueue() {
    const allProgress = Store.getAllProgress();
    const settings = Store.getSettings();
    const dailyLimit = settings.dailyNewLimit || 10;
    const reviewList = [];
    const newList = [];

    DICT.forEach((word) => {
      if (!unitFilter(word)) return;
      const p = allProgress[word.id];
      if (!p) {
        newList.push(word);
      } else if (isDue(p)) {
        reviewList.push(word);
      }
    });

    // 每日任务：优先安排待复习，用完额度再加新词
    // 新词和复习词各自上限 dailyLimit，超出部分自动留到明天
    const limitedReview = reviewList.slice(0, dailyLimit);
    const limitedNew = newList.slice(0, dailyLimit);
    const queue = limitedReview.map((w) => ({ word: w, mode: "review" }))
      .concat(limitedNew.map((w) => ({ word: w, mode: "new" })));

    return {
      queue,
      reviewCount: reviewList.length,
      reviewShown: limitedReview.length,
      newCount: limitedNew.length,
      skippedReview: reviewList.length - limitedReview.length,
      skippedNew: newList.length - limitedNew.length
    };
  }

  function unitWordCount(unit) {
    if (!unit || unit === "all") return DICT.length;
    return DICT.filter((w) => w.unit === unit).length;
  }

  // ===================== 屏幕切换 =====================
  function showScreen(name) {
    currentScreen = name;
    if (name === "study" && cardSlider) {
      cancelAnimation();
      cardSlider.style.transform = "";
      _sliderY = 0;
    }
    // 离开学习页时清理纯默写 session
    if (name !== "study" && name !== "done") {
      dictationSession = [];
      dictationWrongIds = [];
    }
    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    document.getElementById("screen-" + name).classList.add("active");
    document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
    const btn = document.querySelector(`.nav-btn[data-screen="${name}"]`);
    if (btn) btn.classList.add("active");
    if (name === "home") renderHome();
    if (name === "stats") renderStats();
    if (name === "free") renderFreePage();
  }

  // ===================== 首页 =====================
  function renderUnitPicker() {
    var wrap = $("#unit-picker-btns");
    if (!wrap) return;
    var sel = Store.getSettings().selectedUnit || "all";
    // 从词库收集单元（保持出现顺序）
    var units = [];
    var seenU = {};
    DICT.forEach(function (w) {
      if (!seenU[w.unit]) { seenU[w.unit] = true; units.push(w.unit); }
    });
    var html = '<button class="unit-btn' + (sel === "all" ? " active" : "") +
      '" data-unit="all">全部</button>';
    units.forEach(function (u) {
      var active = sel === u ? " active" : "";
      var count = DICT.filter(function (w) { return w.unit === u; }).length;
      html += '<button class="unit-btn' + active + '" data-unit="' + u + '">' +
        u.replace("Unit ", "U") + '<span class="unit-count">' + count + '</span></button>';
    });
    wrap.innerHTML = html;
    wrap.querySelectorAll(".unit-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var s = Store.getSettings();
        s.selectedUnit = btn.dataset.unit;
        Store.saveSettings(s);
        renderUnitPicker();
        renderHome();
      });
    });
  }

  function renderHome() {
    renderUnitPicker();
    const { queue, reviewCount, reviewShown, newCount, skippedReview, skippedNew } = buildTodayQueue();
    const sel = Store.getSettings().selectedUnit || "all";
    const allProgress = Store.getAllProgress();
    // 只统计当前选中的单元
    const learnedCount = Object.keys(allProgress).filter(function (id) {
      var w = DICT.find(function (d) { return d.id === id; });
      return w && (sel === "all" || w.unit === sel);
    }).length;
    const masteredCount = Object.values(allProgress).filter(isMastered).length;

    // 显示实际会进入今日任务的词数（已限制）
    $("#home-review").textContent = reviewShown;
    $("#home-new").textContent = newCount;
    $("#home-learned").textContent = learnedCount;
    $("#home-mastered").textContent = masteredCount;
    $("#home-total").textContent = unitWordCount(sel);

    // 如果有限制被跳过，显示提示
    const skippedHint = $("#home-skipped-hint");
    if (skippedHint) {
      const hints = [];
      if (skippedReview > 0) hints.push(skippedReview + " 个待复习留到明天");
      if (skippedNew > 0) hints.push(skippedNew + " 个新词留到明天");
      if (hints.length > 0) {
        skippedHint.style.display = "";
        skippedHint.textContent = "⏳ " + hints.join("，");
      } else {
        skippedHint.style.display = "none";
      }
    }

    const browseBtn = $("#home-browse");
    const writeBtn = $("#home-start");
    const dictBtn = $("#home-dictation");
    const unitName = sel === "all" ? "全部" : sel;
    if (queue.length === 0) {
      browseBtn.disabled = true;
      writeBtn.disabled = true;
      dictBtn.disabled = true;
      writeBtn.querySelector(".mode-name").textContent = "今天完成啦 🎉";
      writeBtn.querySelector(".mode-desc").textContent = unitName;
      dictBtn.querySelector(".mode-name").textContent = "今天完成啦 🎉";
      dictBtn.querySelector(".mode-desc").textContent = unitName;
    } else {
      browseBtn.disabled = false;
      writeBtn.disabled = false;
      dictBtn.disabled = false;
      writeBtn.querySelector(".mode-name").textContent = "默写";
      writeBtn.querySelector(".mode-desc").textContent = unitName;
      dictBtn.querySelector(".mode-name").textContent = "纯默写";
      dictBtn.querySelector(".mode-desc").textContent = unitName;
    }
  }

  // 进入学习：appMode = "write" 默写 | "browse" 浏览 | "dictation" 纯默写
  function startStudy(mode) {
    appMode = mode || "write";
    const { queue } = buildTodayQueue();
    if (queue.length === 0) { showScreen("home"); return; }
    studyQueue = queue;
    queueIndex = 0;
    showScreen("study");
    renderCard();
    // 记单词模式：首张卡片自动播放单词 + 例句
    if (appMode === "browse") {
      setTimeout(function() { speak(studyQueue[0].word.id, function() { speakSentence(studyQueue[0].word.id); }); }, 200);
    }
    // 默写模式：先显示学习面，上滑再进入默写
    // 纯默写模式：直接进入默写面
    if (appMode === "dictation") {
      enterWritePhase();
    }
  }

  // ===================== 自由刷题 =====================
  var _freeUnit = "all"; // 用户选中的单元

  /** 自由刷题队列：选中单元的全部单词，不按每日新词限制，不设上限 */
  function buildFreeQueue() {
    const words = DICT.filter(function(w) {
      if (_freeUnit === "all") return true;
      return w.unit === _freeUnit;
    });
    const queue = words.map(function(w) { return { word: w, mode: "free" }; });
    return { queue };
  }

  function renderFreePage() {
    var container = $("#free-unit-btns");
    var freeInfo = $("#free-unit-info");
    var selText = $("#free-selected-text");
    // 元素不存在时不应抛出（可能因脚本加载顺序/缓存问题）
    if (!container || !freeInfo || !selText) {
      console.warn("renderFreePage: 容器缺失", {
        container: !!container, freeInfo: !!freeInfo, selText: !!selText,
        DICTlen: (window.DICTIONARY ? window.DICTIONARY.length : undefined)
      });
      return;
    }
    var allProgress = Store.getAllProgress();
    var html = '';

    // 记录已渲染的单元（用于去重）
    var rendered = { all: true };

    // "全部"按钮
    var cls = _freeUnit === "all" ? " active" : "";
    html += '<button class="unit-btn' + cls + '" data-unit="all">全部</button>';

    // 收集单元（保持出现顺序）
    var units = [];
    DICT.forEach(function(w) {
      if (!rendered[w.unit]) { rendered[w.unit] = true; units.push(w.unit); }
    });
    units.forEach(function(unit) {
      var unitWords = DICT.filter(function(x) { return x.unit === unit; });
      var unitLearned = unitWords.filter(function(x) { return allProgress[x.id]; }).length;
      var unitCls = _freeUnit === unit ? " active" : "";
      var text = unit + ' · ' + unitLearned + '/' + unitWords.length;
      html += '<button class="unit-btn' + unitCls + '" data-unit="' + unit + '">' + text + '</button>';
    });
    container.innerHTML = html;

    // 绑定单元选择
    container.onclick = function(e) {
      var btn = e.target.closest(".unit-btn");
      if (!btn) return;
      _freeUnit = btn.getAttribute("data-unit") || "all";
      renderFreePage();
    };

    // 更新状态文字
    var freeCount = _freeUnit === "all" ? DICT.length : DICT.filter(function(w) { return w.unit === _freeUnit; }).length;
    freeInfo.textContent = _freeUnit === "all" ? "全部单元共 " + freeCount + " 个单词" : _freeUnit + " 共 " + freeCount + " 个单词";
    selText.textContent = _freeUnit === "all" ? "全部" : _freeUnit;

    // 始终启用模式按钮（自由刷题不依赖队列非空）
    var browseBtn = $("#free-browse");
    var writeBtn = $("#free-write");
    var dictBtn = $("#free-dictation");
    if (browseBtn) browseBtn.disabled = false;
    if (writeBtn) writeBtn.disabled = false;
    if (dictBtn) dictBtn.disabled = false;
  }

  function startFreeStudy(mode) {
    appMode = mode || "write";
    const { queue } = buildFreeQueue();
    if (queue.length === 0) { showScreen("home"); return; }
    studyQueue = queue;
    queueIndex = 0;
    showScreen("study");
    renderCard();
    // 自由刷题记单词模式：首张卡片自动播放单词 + 例句
    if (appMode === "browse") {
      setTimeout(function() { speak(studyQueue[0].word.id, function() { speakSentence(studyQueue[0].word.id); }); }, 200);
    }
    if (appMode === "dictation") {
      enterWritePhase();
    }
  }

  // ===================== 卡片渲染 =====================
  // 显示/隐藏词根联想等信息块
  function setBlock(id, content) {
    var el = document.getElementById(id);
    if (!el) return;
    el.textContent = content || "";
    var block = el.closest(".card-block");
    if (block) block.style.display = content ? "" : "none";
  }

  function renderCard() {
    if (queueIndex >= studyQueue.length) { finishStudy(); return; }
    const item = studyQueue[queueIndex];
    const word = item.word;
    const progress = Store.getProgress(word.id);

    currentMode = item.mode;
    cardPhase = "learn";
    skipAttempts = 0;

    // 如果该词今天已作答，恢复上次结果
    var todayAttempts = (progress && progress.history)
      ? progress.history.filter(function (h) {
          return h.date === todayStr() && (h.result === "correct" || h.result === "incomplete" || h.result === "pending_correction");
        })
      : [];
    lastResult = todayAttempts.length > 0
      ? todayAttempts[todayAttempts.length - 1].result === "correct"
      : null;

    $("#study-progress").textContent = `${queueIndex + 1} / ${studyQueue.length}`;
    // 顶部模式标签：显示单元 + 浏览/新词/复习
    const unitName = word.unit || "";
    if (appMode === "browse") {
      $("#study-mode").textContent = unitName ? unitName + " · 记单词" : "记单词";
      $("#study-mode").className = "mode-tag browse";
    } else if (appMode === "free") {
      $("#study-mode").textContent = unitName ? unitName + " · 自由刷题" : "自由刷题";
      $("#study-mode").className = "mode-tag free";
    } else {
      $("#study-mode").textContent = unitName
        ? unitName + " · " + (item.mode === "review" ? "复习" : "新词")
        : (item.mode === "review" ? "复习" : "新词");
      $("#study-mode").className = "mode-tag " + item.mode;
    }

    // 6 类信息（词库无的词根/联想/例句块自动隐藏）
    var emojiEl = $("#card-emoji");
    if (word.emoji) { emojiEl.style.display = ""; emojiEl.textContent = word.emoji; }
    else { emojiEl.style.display = "none"; }
    $("#card-word").textContent = word.word;
    // 绑定朗读按钮
    var playBtn = $("#play-btn");
    if (playBtn) {
      playBtn.onclick = function (e) { e.stopPropagation(); speak(word.id); };
    }
    // 绑定默写面朗读按钮
    var playWriteBtn = $("#play-btn-write");
    if (playWriteBtn) {
      playWriteBtn.onclick = function (e) { e.stopPropagation(); speak(word.id); };
    }
    $("#card-phonetic").textContent = word.phonetic || "";
    $("#card-pos-meaning").textContent = (word.pos ? word.pos + " " : "") + word.meaning;
    setBlock("card-root", word.root);
    setBlock("card-mnemonic", word.mnemonic);
    $("#card-example-en").innerHTML = (word.example || "") + (word.example ? ' <span class="example-play-btn" id="example-play-btn" onclick="speakSentence(\'' + word.id + '\')">🔊</span>' : '');
    $("#card-example-zh").textContent = word.exampleTrans || "";
    var exampleBlock = $("#card-example-en").closest(".card-block");
    if (exampleBlock) exampleBlock.style.display = (word.example || word.exampleTrans) ? "" : "none";
    $("#card-stage").textContent = stageText(progress);

    // 默写面预备
    $("#write-meaning").textContent = (word.pos ? word.pos + " " : "") + word.meaning;

    // 显示学习面
    showCardFace("card-learn");
    $("#write-input").value = "";
    $("#write-hint").textContent = "";

    // 按应用模式切换 UI
    if (appMode === "browse") {
      // 记单词模式：隐藏默写入口和阶段标记，只滑动浏览
      $("#card-write-btn").style.display = "none";
      $("#card-stage").style.display = "none";
      setHint(queueIndex < studyQueue.length - 1
        ? "上滑看下一个 ↑" : "已是最后一个 ↑返回");
    } else if (appMode === "dictation") {
      // 纯默写模式：隐藏学习面的按钮，直接进入默写
      $("#card-write-btn").style.display = "none";
      $("#card-stage").style.display = "";
      // 模式标签显示"纯默写"
      var unitName2 = word.unit || "";
      $("#study-mode").textContent = unitName2
        ? unitName2 + " · 纯默写"
        : "纯默写";
      $("#study-mode").className = "mode-tag dictation";
      setHint("输入后提交或上滑 · 自动进入下一词");
    } else {
      // 默写模式：学习面显示"上滑下一词，左滑开始默写"
      $("#card-write-btn").style.display = "";
      $("#card-stage").style.display = "";
      setHint("上滑下一词 · 左滑开始默写");
    }
  }

  // 纯默写模式专用渲染：跳过学习面，直接渲染默写面（避免闪烁）
  function renderPureDictation() {
    if (queueIndex >= studyQueue.length) { finishStudy(); return; }
    const item = studyQueue[queueIndex];
    const word = item.word;
    const progress = Store.getProgress(word.id);

    currentMode = item.mode;
    cardPhase = "write";

    // 更新进度
    $("#study-progress").textContent = `${queueIndex + 1} / ${studyQueue.length}`;
    var unitName = word.unit || "";
    $("#study-mode").textContent = unitName ? unitName + " · 纯默写" : "纯默写";
    $("#study-mode").className = "mode-tag dictation";

    // 先更新内容，再显示默写面（避免内容更新前的闪烁）
    $("#write-meaning").textContent = (word.pos ? word.pos + " " : "") + word.meaning;
    $("#write-input").value = "";
    $("#write-hint").textContent = "";
    showCardFace("card-write");
    setHint("上滑录入答案 · 全部完成后统一批改");
  }

  function enterWritePhase() {
    if (cardPhase !== "learn") return;
    cardPhase = "write";
    var word = studyQueue[queueIndex].word;
    $("#write-meaning").textContent = (word.pos ? word.pos + " " : "") + word.meaning;
    showCardFace("card-write");
    $("#write-input").value = "";
    $("#write-hint").textContent = "";
    skipAttempts = 0;
    setHint("输入后点提交或上滑检查 ↑");
    setTimeout(function () { $("#write-input").focus(); }, 100);
  }

  // 默写判分：去掉占位符(sb/sth/...)和标点后对比
  // 例：'be home to sb / sth' 与输入 'be home to' 视为正确
  function normalizeAnswer(s) {
    return s
      .toLowerCase()
      .replace(/sb['’]?s?/g, " ")       // sb / sb's
      .replace(/sth/g, " ")
      .replace(/[.…·]/g, " ")
      .replace(/\([^)]*\)/g, " ")        // (…) (on ...) 等括号占位
      .replace(/[^a-z\s]/g, " ")         // 其余符号转空格
      .replace(/\s+/g, " ")
      .trim();
  }

  function submitWrite() {
    if (cardPhase !== "write") return;
    const word = studyQueue[queueIndex].word;
    const rawInput = $("#write-input").value.trim();
    const input = rawInput.toLowerCase();
    const inputNorm = normalizeAnswer(input);
    const answerNorm = normalizeAnswer(word.word);

    // 纯默写模式：录入答案（不检查），上滑存到 session 后进入下一词
    if (appMode === "dictation") {
      dictationSession.push({ wordId: word.id, userAnswer: rawInput });
      if (queueIndex >= studyQueue.length - 1) {
        finishStudy();
      } else {
        commitToNextWord();
      }
      return;
    }

    if (!input) {
      $("#write-hint").textContent = "请先输入拼写～";
      return;
    }

    // 判分
    const correct = word.word === input || (inputNorm && inputNorm === answerNorm);
    let progress = Store.getProgress(word.id);
    if (!progress) progress = createNewProgress();
    progress = recordAnswer(progress, correct ? "correct" : "incomplete");
    Store.setProgress(word.id, progress);

    cardPhase = "result";
    showCardFace("card-result", correct ? "correct" : "wrong");
    $("#result-title").textContent = correct ? "答对了！🎉" : "再记一次 💪";
    $("#result-answer").textContent = word.word;
    $("#result-meaning").textContent = (word.pos ? word.pos + " " : "") + word.meaning;
    $("#result-stage").textContent = stageText(progress);
    $("#card-next-btn").textContent = correct ? "下一个" : "再看一遍";
    setHint(correct ? "上滑进入下一个 ↑" : "右滑看解释 · 上滑继续下一个");
  }

  // 答错后回到学习面重新看
  function backToLearnPhase() {
    cardPhase = "learn";
    var word = studyQueue[queueIndex].word;
    var progress = Store.getProgress(word.id);
    $("#card-stage").textContent = stageText(progress);
    showCardFace("card-learn");
    $("#write-input").value = "";
    $("#write-hint").textContent = "";
    skipAttempts = 0;
    setHint("上滑下一词 · 左滑开始默写");
    $("#card-next-btn").textContent = "下一个";
  }

  function nextCard() {
    slideToNextWord();
  }

  function prevCard() {
    slideToPrevWord();
  }

  // 左滑（由 onRelease 的水平分量判断后调用）
  function onSwipeLeft() {
    if (appMode !== "write") return;
    if (cardPhase === "learn") {
      enterWritePhase();
    }
  }

  // 右滑 = 从默写/结果返回学习面
  function onSwipeRight() {
    if (appMode !== "write") return;
    if (cardPhase === "write" || cardPhase === "result") {
      backToLearnPhase();
    }
  }

  function finishStudy() {
    showScreen("done");
    const sel = Store.getSettings().selectedUnit || "all";
    const unitName = sel === "all" ? "" : sel + " ";

    if (appMode === "dictation") {
      // ---- 纯默写模式：批改所有答案 ----
      const correctList = [];
      const wrongList = [];
      var detailHtml = '';

      dictationSession.forEach(function (r) {
        var w = DICT.find(function (d) { return d.id === r.wordId; });
        if (!w) return;
        var userNorm = normalizeAnswer(r.userAnswer);
        var answerNorm = normalizeAnswer(w.word);
        var isCorrect = w.word === r.userAnswer || (userNorm && userNorm === answerNorm);
        if (isCorrect) {
          correctList.push(r.wordId);
        } else {
          wrongList.push(r.wordId);
        }
        // 生成批改详情
        var icon = isCorrect ? '✅' : '❌';
        var userDisplay = r.userAnswer || '(未填写)';
        detailHtml += '<div style="padding:10px 14px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:10px;">'
          + '<span style="font-size:18px;">' + icon + '</span>'
          + '<div style="flex:1;min-width:0;">'
          + '<div style="font-size:14px;color:#666;">' + w.meaning + '</div>'
          + '<div style="font-size:16px;font-weight:600;' + (isCorrect ? 'color:#2ecc71;' : 'color:#ff4757;') + '">'
          + (isCorrect ? w.word : ('你的答案: ' + userDisplay))
          + '</div>'
          + (!isCorrect ? '<div style="font-size:14px;color:#2ecc71;">正确答案: ' + w.word + '</div>' : '')
          + '</div></div>';
      });

      // 答对词 → 标记为已掌握
      correctList.forEach(function (id) {
        var p = Store.getProgress(id);
        if (!p) p = createNewProgress();
        p.stage = MASTERED_STAGE;
        p.dueDate = null;
        Store.setProgress(id, p);
      });

      // 答错词 → 今天到期（出现在复习队列），不改 stage
      wrongList.forEach(function (id) {
        var p = Store.getProgress(id);
        if (!p) p = createNewProgress();
        p.dueDate = todayStr();
        Store.setProgress(id, p);
      });

      // 保存 session 到 localStorage 用于统计
      var dictStats = Store.getDictationStats() || { sessions: [] };
      dictStats.sessions.push({
        date: todayStr(),
        total: dictationSession.length,
        correct: correctList.length,
        wrong: wrongList.length,
        wrongWords: wrongList
      });
      // 只保留最近 100 条
      if (dictStats.sessions.length > 100) dictStats.sessions = dictStats.sessions.slice(-100);
      Store.saveDictationStats(dictStats);
      // 记录今天学习了
      Store.recordStudyDay();

      // 更新完成页 UI
      var total = dictationSession.length;
      var correctCount = correctList.length;
      var wrongCount = wrongList.length;
      var accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;

      $("#done-title").textContent = unitName + "纯默写完成！";
      $("#done-sub").textContent = correctCount === total
        ? "全部答对，太棒了！🎉"
        : "有 " + wrongCount + " 个需要订正，再刷一轮吧！";
      $("#done-dictation-result").style.display = "";
      $("#done-dict-correct").textContent = correctCount;
      $("#done-dict-wrong").textContent = wrongCount;
      $("#done-dict-total").textContent = total;
      $("#done-dict-accuracy").textContent = accuracy + "%";

      // 显示批改详情
      $("#done-dict-detail").innerHTML = detailHtml;

      // 待更正按钮
      var redoBtn = $("#done-redo-wrong");
      if (wrongCount > 0) {
        redoBtn.style.display = "";
        $("#done-wrong-count").textContent = wrongCount;
        dictationWrongIds = wrongList;
      } else {
        redoBtn.style.display = "none";
        dictationWrongIds = [];
      }

      // 清除 session
      dictationSession = [];
    } else {
      // ---- 非纯默写模式：原逻辑 ----
      if (appMode === "browse") {
        $("#done-title").textContent = unitName + "今日单词浏览完啦！";
      } else {
        $("#done-title").textContent = unitName + "今天的任务完成啦！";
      }
      $("#done-sub").textContent = "艾宾浩斯曲线告诉你：明天记得回来复习哦";
      $("#done-dictation-result").style.display = "none";
    }

    const allProgress = Store.getAllProgress();
    $("#done-mastered").textContent = Object.values(allProgress).filter(isMastered).length;
    $("#done-learned").textContent = Object.keys(allProgress).length;
    $("#done-total").textContent = unitWordCount(sel);
  }

  // 纯默写模式：重做错词（待更正）
  function redoDictation() {
    if (dictationWrongIds.length === 0) return;
    // 用错词构建队列
    var wrongWords = [];
    dictationWrongIds.forEach(function (id) {
      var w = DICT.find(function (d) { return d.id === id; });
      if (w) wrongWords.push(w);
    });
    if (wrongWords.length === 0) { showScreen("home"); return; }
    // 重置 session
    dictationSession = [];
    studyQueue = wrongWords.map(function (w) { return { word: w, mode: "new" }; });
    queueIndex = 0;
    appMode = "dictation";
    showScreen("study");
    renderCard();
    enterWritePhase();
  }

  // ===================== 统计页 =====================
  function renderStats() {
    const allProgress = Store.getAllProgress();
    const sel = Store.getSettings().selectedUnit || "all";
    const filteredDict = sel === "all" ? DICT : DICT.filter(function(w) { return w.unit === sel; });
    const total = filteredDict.length;
    const learned = filteredDict.filter(function(w) { return allProgress[w.id]; }).length;
    const mastered = filteredDict.filter(function(w) {
      return allProgress[w.id] && isMastered(allProgress[w.id]);
    }).length;

    // 连续打卡天数 & 累计学习天数
    const studyDays = Store.getStudyDays();
    const totalDays = studyDays.length;
    let streak = 0;
    if (totalDays > 0) {
      const sorted = studyDays.slice().sort().reverse(); // 最新在前
      const today = todayStr();
      const yesterday = addDays(today, -1);
      // 连续天数：从今天或昨天开始往回数
      let checkDate = sorted[0] === today ? today : (sorted[0] === yesterday ? yesterday : null);
      if (checkDate) {
        streak = 1;
        for (let i = 1; i < sorted.length; i++) {
          const prev = addDays(checkDate, -1);
          if (sorted.indexOf(prev) !== -1) {
            streak++;
            checkDate = prev;
          } else {
            break;
          }
        }
      }
    }

    $("#stats-streak").textContent = streak;
    $("#stats-total-days").textContent = totalDays;
    $("#stats-mastered").textContent = mastered;
    $("#stats-learned").textContent = learned;
    $("#stats-total").textContent = total;

    const pct = total > 0 ? Math.round((learned / total) * 100) : 0;
    $("#stats-progress-bar").style.width = pct + "%";
    $("#stats-progress-text").textContent = pct + "%";

    // ---- 今日待办 ----
    const todoContainer = $("#today-todo-list");
    const today = todayStr();
    const settings = Store.getSettings();
    const dailyNewLimit = settings.dailyNewLimit || 10;

    // 1. 待复习的词（dueDate <= 今天，且未掌握）
    const reviewWords = filteredDict.filter(function(w) {
      const p = allProgress[w.id];
      return p && p.dueDate && p.dueDate <= today && !isMastered(p);
    });

    // 2. 今天已学了多少新词
    const todayLearned = filteredDict.filter(function(w) {
      const p = allProgress[w.id];
      return p && p.learnedDate === today;
    }).length;

    // 3. 还能学多少新词
    const remainingNew = Math.max(0, dailyNewLimit - todayLearned);

    // 4. 未学过的词
    const unlearnedCount = total - learned;

    var todoHtml = '';

    // 待复习
    if (reviewWords.length > 0) {
      todoHtml += '<div class="todo-item">'
        + '<span class="todo-icon">🔄</span>'
        + '<div class="todo-info">'
        + '<div class="todo-title">待复习单词</div>'
        + '<div class="todo-desc">有 ' + reviewWords.length + ' 个单词需要复习</div>'
        + '</div>'
        + '<span class="todo-badge pending">待复习</span>'
        + '</div>';
    } else {
      todoHtml += '<div class="todo-item done">'
        + '<span class="todo-icon">✅</span>'
        + '<div class="todo-info">'
        + '<div class="todo-title">待复习单词</div>'
        + '<div class="todo-desc">今天没有需要复习的单词</div>'
        + '</div>'
        + '<span class="todo-badge done">已完成</span>'
        + '</div>';
    }

    // 新词学习
    if (remainingNew > 0 && unlearnedCount > 0) {
      const showCount = Math.min(remainingNew, unlearnedCount);
      todoHtml += '<div class="todo-item">'
        + '<span class="todo-icon">📚</span>'
        + '<div class="todo-info">'
        + '<div class="todo-title">学习新单词</div>'
        + '<div class="todo-desc">今天还能学 ' + showCount + ' 个新词（已学 ' + todayLearned + '/' + dailyNewLimit + '）</div>'
        + '</div>'
        + '<span class="todo-badge pending">待学习</span>'
        + '</div>';
    } else if (unlearnedCount > 0) {
      todoHtml += '<div class="todo-item done">'
        + '<span class="todo-icon">✅</span>'
        + '<div class="todo-info">'
        + '<div class="todo-title">学习新单词</div>'
        + '<div class="todo-desc">今天的新词额度已用完（' + todayLearned + '/' + dailyNewLimit + '）</div>'
        + '</div>'
        + '<span class="todo-badge done">已完成</span>'
        + '</div>';
    } else {
      todoHtml += '<div class="todo-item done">'
        + '<span class="todo-icon">🎉</span>'
        + '<div class="todo-info">'
        + '<div class="todo-title">学习新单词</div>'
        + '<div class="todo-desc">所有单词都已学过啦！</div>'
        + '</div>'
        + '<span class="todo-badge done">已完成</span>'
        + '</div>';
    }

    // 纯默写
    todoHtml += '<div class="todo-item">'
      + '<span class="todo-icon">🔥</span>'
      + '<div class="todo-info">'
      + '<div class="todo-title">纯默写测试</div>'
      + '<div class="todo-desc">检验记忆效果，挑战一下吧</div>'
      + '</div>'
      + '<span class="todo-badge pending">去默写</span>'
      + '</div>';

    todoContainer.innerHTML = todoHtml;
  }

  // ===================== 手势 =====================
  let swipeDetector = null;
  function initSwipe() {
    if (swipeDetector) return;
    swipeDetector = new SwipeDetector($("#study"), {
      onGestureStart: onGestureStart,
      onDrag: onDrag,
      onRelease: onRelease,
      onSwipeLeft: onSwipeLeft,
      onSwipeRight: onSwipeRight
    });
  }

  // ===================== 设置 =====================
  function bindSettings() {
    const input = $("#setting-daily-new");
    input.value = Store.getSettings().dailyNewLimit;
    function saveDailyLimit() {
      let v = parseInt(input.value, 10);
      if (isNaN(v) || v < 1) v = 1;
      if (v > DICT.length) v = DICT.length;
      input.value = v;
      const s = Store.getSettings();
      s.dailyNewLimit = v;
      Store.saveSettings(s);
    }
    input.addEventListener("change", saveDailyLimit);
    input.addEventListener("input", saveDailyLimit);

    $("#btn-export").addEventListener("click", () => {
      const data = Store.exportData();
      const blob = new Blob([data], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `vocab-backup-${todayStr()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });

    $("#btn-import").addEventListener("click", () => $("#import-file").click());
    $("#import-file").addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          Store.importData(reader.result);
          alert("导入成功！");
          renderHome(); renderStats();
        } catch (err) {
          alert("导入失败：" + err.message);
        }
      };
      reader.readAsText(file);
    });

    $("#btn-reset").addEventListener("click", () => {
      if (confirm("确定要清空所有学习进度吗？此操作不可恢复！")) {
        Store.resetAll();
        alert("已清空。");
        renderHome(); renderStats();
      }
    });
  }

  // ===================== 初始化 =====================
  function init() {
    document.querySelectorAll(".nav-btn").forEach((btn) => {
      btn.addEventListener("click", () => showScreen(btn.dataset.screen));
    });
    $("#home-start").addEventListener("click", () => startStudy("write"));
    $("#home-browse").addEventListener("click", () => startStudy("browse"));
    $("#home-dictation").addEventListener("click", () => startStudy("dictation"));
    $("#home-free").addEventListener("click", () => {
      showScreen("free");
      renderFreePage();
    });
    $("#free-browse").addEventListener("click", () => startFreeStudy("browse"));
    $("#free-write").addEventListener("click", () => startFreeStudy("write"));
    $("#free-dictation").addEventListener("click", () => startFreeStudy("dictation"));
    $("#done-back").addEventListener("click", () => showScreen("home"));
    $("#done-redo-wrong").addEventListener("click", redoDictation);
    $("#write-submit").addEventListener("click", submitWrite);
    $("#write-input").addEventListener("keydown", (e) => {
      if (e.key === "Enter") submitWrite();
    });
    $("#card-next-btn").addEventListener("click", nextCard);
    $("#card-write-btn").addEventListener("click", enterWritePhase);

    bindSettings();
    initSwipe();
    showScreen("home");
  }

  // 直接执行 init（DOMContentLoaded 可能已触发）
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();