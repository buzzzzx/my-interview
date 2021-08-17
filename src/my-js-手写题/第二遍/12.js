function currying(fn, ...args) {
  if (fn.length <= args.length) {
    return fn(args);
  } else {
    return function (...args2) {
      return currying(fn, ...args, ...args2);
    };
  }
}
