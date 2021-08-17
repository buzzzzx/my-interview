function myCreate(obj, properties) {
  function F() {}
  F.prototype = obj;
  const res = new F();
  if (properties) {
    Object.defineProperties(res, properties);
  }
  return res;
}
