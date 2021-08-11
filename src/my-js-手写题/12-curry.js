function currying(fn, ...args) {
  if (fn.length <= args.length) {
    return fn.apply(this, args);
  } else {
    return (...args2) => {
      return currying(fn, ...args, ...args2);
    };
  }
}

// test
function add(x, y, z) {
  return x + y + z;
}

console.log(currying(add, 1)(2)(3)); // 6
console.log(currying(add, 1, 2)(2)); // 5
