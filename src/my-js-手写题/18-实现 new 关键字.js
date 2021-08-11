function myNew(constructor, ...args) {
  const obj = {};
  const res = constructor.apply(obj, args);
  res.__proto__ = constructor.prototype;
  return res instanceof Object ? res : obj;
}
