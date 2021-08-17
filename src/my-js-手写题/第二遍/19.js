function myInstanceOf(obj, ctor) {
  const prototype = ctor.prototype;
  let proto = obj.__proto__;
  while (true) {
    if (proto == null) {
      return false;
    }
    if (proto === prototype) {
      return true;
    }
    proto = proto.__proto__;
  }
}
