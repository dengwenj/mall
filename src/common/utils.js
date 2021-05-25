export function debounce(func, delay) {
  // 防抖 不要让refresh非常频繁
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      // func();
      func.apply(this, args);
    }, delay);
  };
}