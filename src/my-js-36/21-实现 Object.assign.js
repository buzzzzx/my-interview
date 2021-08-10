/**
 * 拷贝源对象自身的并且可枚举的属性（字符串/symbol）到目标对象
 * @param target
 * @param sources
 * @return {*}
 */
function myAssign(target, ...sources) {
  if (target == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  sources.forEach((src) => {
    // symbol 属性
    for (let key of Object.getOwnPropertySymbols(src)) {
      target[key] = src[key];
    }
    // 字符串属性
    for (let key of Object.keys(src)) {
      target[key] = src[key];
    }
  });

  return target;
}

let s1 = Symbol();
let target = { x: 1, y: 2 };
let o1 = { x: 2, z: 1 };
let o2 = { x: 3, z: 2 };
let o3 = { p: 10, [s1]: 20 };
myAssign(target, o1, o2, o3);
console.log(target);
