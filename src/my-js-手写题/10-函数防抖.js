function debounce(fn, delay) {
  let timer;
  const _that = this;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(_that, args);
    }, delay);
  };
}
