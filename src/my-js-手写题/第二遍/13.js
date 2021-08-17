function partial(fn, ...args) {
  return (...args2) => {
    return fn(...args, ...args2);
  };
}
