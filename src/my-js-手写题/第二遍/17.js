function myCall(ctx, ...args) {
  if (this === Function.prototype) {
    return; // or throw err
  }
  ctx = ctx || window;
  const fn = Symbol();
  ctx[fn] = this;
  const res = ctx[fn](...args);
  delete ctx[fn];
  return res;
}

function myArray(ctx, args) {
  if (this === Function.prototype) {
    return; // or throw err
  }
  ctx = ctx || window;
  const fn = Symbol();
  ctx[fn] = this;
  let res;
  if (Array.isArray(args)) {
    res = ctx[fn](...args);
  } else {
    res = ctx[fn]();
  }

  delete ctx[fn]();
  return res;
}

function myBind(ctx, ...args) {
  if (this === Function.prototype) {
    return;
  }

  ctx = ctx || window;
  const fn = this;
  return function F(...args2) {
    if (this instanceof F) {
      return new fn(...args, ...args2);
    }

    return fn.apply(ctx, [...args, ...args2]);
  };
}
