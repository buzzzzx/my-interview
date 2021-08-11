/**
 * call
 */
function myCall(ctx, ...args) {
  if (this === Function.prototype) {
    return undefined; // 防止 Function.prototype.myCall() 直接调用
  }
  ctx = ctx || window;
  const fn = Symbol();
  ctx[fn] = this;
  const res = ctx[fn](...args);
  delete ctx[fn];
  return res;
}

/**
 * apply
 */
function myApply(ctx, args) {
  if (this === Function.prototype) {
    return undefined;
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
  delete ctx[fn];
  return res;
}

/**
 * bind
 */
function myBind(ctx, ...args) {
  if (this === Function.prototype) {
    return undefined;
  }

  const fn = this;
  return function F(...args1) {
    if (this instanceof F) {
      // this 是 F 作为构造函数调用创建的 this
      return new fn(...args, ...args1);
    }
    return fn.apply(ctx, [...args, ...args1]);
  };
}
