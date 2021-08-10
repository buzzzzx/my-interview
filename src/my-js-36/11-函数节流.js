function throttle(fn, delay) {
  let pre = 0;
  return (...args) => {
    if (Date.now() - pre > delay) {
      pre = Date.now();
      fn.apply(this, args);
    }
  };
}
