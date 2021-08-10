function myInstanceOf(obj, ctor) {
  const prototype = ctor.prototype;
  let tmp = obj.__proto__;
  while (true) {
    if (tmp == null) {
      return false;
    }
    if (tmp === prototype) {
      return true;
    }
    tmp = tmp.__proto__;
  }
}
