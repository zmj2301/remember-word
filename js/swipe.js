/**
 * 手势检测模块（跟手拖拽版，含水平手势）
 * 监听触摸 / 鼠标的拖拽：
 *   - onDrag(deltaY)                 实时跟手回调（垂直）
 *   - onRelease(dx, dy, vx, vy)      手指抬起回调
 *   - onSnapBack()                   未达阈值时弹回
 *   - onSwipeUp / onSwipeDown        垂直超过阈值时触发
 *   - onSwipeLeft / onSwipeRight     水平超过阈值时触发
 */
class SwipeDetector {
  constructor(el, options = {}) {
    this.el = el;
    this.onSwipeUp = options.onSwipeUp || (() => {});
    this.onSwipeDown = options.onSwipeDown || (() => {});
    this.onSwipeLeft = options.onSwipeLeft || (() => {});
    this.onSwipeRight = options.onSwipeRight || (() => {});
    this.onDrag = options.onDrag || null;
    this.onRelease = options.onRelease || null;
    this.onGestureStart = options.onGestureStart || null;
    this.threshold = options.threshold || 50;
    this.velocityThreshold = options.velocityThreshold || 0.4;

    this.startX = 0;
    this.startY = 0;
    this.deltaX = 0;
    this.deltaY = 0;
    this.tracking = false;
    this.positions = [];

    this._onTouchStart = this._onTouchStart.bind(this);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);

    el.addEventListener("touchstart", this._onTouchStart, { passive: true });
    el.addEventListener("touchend", this._onTouchEnd, { passive: true });
    el.addEventListener("mousedown", this._onMouseDown);
  }

  destroy() {
    this.el.removeEventListener("touchstart", this._onTouchStart);
    this.el.removeEventListener("touchend", this._onTouchEnd);
    this.el.removeEventListener("mousedown", this._onMouseDown);
    this.el.removeEventListener("touchmove", this._onTouchMove);
    document.removeEventListener("mousemove", this._onMouseMove);
    document.removeEventListener("mouseup", this._onMouseUp);
  }

  _onTouchStart(e) {
    const t = e.touches[0];
    this.startX = t.clientX;
    this.startY = t.clientY;
    this.deltaX = 0;
    this.deltaY = 0;
    this.tracking = true;
    this.positions = [{ x: t.clientX, y: t.clientY, t: Date.now() }];
    this.el.addEventListener("touchmove", this._onTouchMove, { passive: false });
    if (this.onGestureStart) this.onGestureStart();
  }

  _onTouchMove(e) {
    if (!this.tracking) return;
    e.preventDefault();
    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;
    this.deltaX = x - this.startX;
    this.deltaY = y - this.startY;
    this._pushPosition(x, y);
    if (this.onDrag) this.onDrag(this.deltaY);
  }

  _onTouchEnd() {
    if (!this.tracking) return;
    this.tracking = false;
    this.el.removeEventListener("touchmove", this._onTouchMove);
    this._finish();
  }

  _onMouseDown(e) {
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.deltaX = 0;
    this.deltaY = 0;
    this.tracking = true;
    this.positions = [{ x: e.clientX, y: e.clientY, t: Date.now() }];
    document.addEventListener("mousemove", this._onMouseMove);
    document.addEventListener("mouseup", this._onMouseUp);
    if (this.onGestureStart) this.onGestureStart();
  }

  _onMouseMove(e) {
    if (!this.tracking) return;
    this.deltaX = e.clientX - this.startX;
    this.deltaY = e.clientY - this.startY;
    this._pushPosition(e.clientX, e.clientY);
    if (this.onDrag) this.onDrag(this.deltaY);
  }

  _onMouseUp() {
    document.removeEventListener("mousemove", this._onMouseMove);
    document.removeEventListener("mouseup", this._onMouseUp);
    if (!this.tracking) return;
    this.tracking = false;
    this._finish();
  }

  _pushPosition(x, y) {
    const now = Date.now();
    this.positions.push({ x, y, t: now });
    this.positions = this.positions.filter(p => now - p.t < 120);
  }

  _finish() {
    const dx = this.deltaX;
    const dy = this.deltaY;
    const now = Date.now();
    const recent = this.positions.filter(p => now - p.t < 100);
    let vx = 0;
    let vy = 0;
    if (recent.length >= 2) {
      const first = recent[0];
      const last = recent[recent.length - 1];
      const dt = last.t - first.t;
      // 时间窗太短（<30ms）时不估速，避免抖动误判
      if (dt > 30) {
        vx = (last.x - first.x) / dt;
        vy = (last.y - first.y) / dt;
      }
    }

    // 统一交给 onRelease：app.js 在其中判断水平/垂直方向
    if (this.onRelease) this.onRelease(dx, dy, vx, vy);
  }
}

window.SwipeDetector = SwipeDetector;
