/**
 * @file 工具类方法模块
 * @author tangyida <530063113@qq.com>
 */

/**
 * 函数防抖 debounce
 * @param {Object} func 要执行的函数
 * @param {Object} wait 延迟时间
 * @param {Object} immediate 是否立即执行
 */
export const debounce = function (func, wait, immediate) {
  let timeout, result;

  let debounced = function () {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行过，不再执行
      let callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }

    return result;
  };

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
};

/**
 * 函数节流 throttle
 * @param {Object} func 要执行的函数
 * @param {Object} wait 等待时间
 * @param {Object} options 配置项，配置是否立即/延迟执行（二选一）
 */
export const throttle = function (func, wait, options) {
  let timeout, context, args, result;
  let previous = 0;
  if (!options) options = {};

  let later = function () {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if (!timeout) context = args = null;
  };

  let throttled = function () {
    let now = new Date().getTime();
    if (!previous && options.leading === false) previous = now;
    let remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  };

  return throttled;
};

// ease-out 贝塞尔动画
export const easeOutCubic = function (pos) {
  return Math.pow(pos - 1, 3) + 1;
};

// ease-in-out 贝塞尔动画
export const easeInOutCubic = function (pos) {
  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(pos, 3);
  }
  return 0.5 * (Math.pow(pos - 2, 3) + 2);
};

