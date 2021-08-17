function myNew(ctor, ...args) {
  const obj = {};
  obj.__proto__ = ctor.prototype;
  const res = ctor.apply(obj, args);
  return res instanceof Object ? res : obj;
}
