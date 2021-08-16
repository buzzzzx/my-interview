// 1. 创建一个新对象
// 2. 链接到原型
// 3. 绑定 this
// 4. 返回新对象
const myNew = (ctor, ...args) => {
  const obj = {}; // 1
  if (ctor.prototype != null) {
    // obj.__proto__ = ctor.prototype;
    Object.setPrototypeOf(obj, ctor.prototype);
  }

  const res = ctor.apply(obj, args);

  return res instanceof Object ? res : obj;
};
