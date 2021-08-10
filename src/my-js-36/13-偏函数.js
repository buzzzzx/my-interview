/**
 * 什么是偏函数？偏函数就是将一个 n 参的函数转换成固定 x 参的函数，剩余参数（n - x）将在下次调用全部传入
 * @param fn
 * @param args
 * @return {(function(...[*]): void)|*}
 */
function partial(fn, ...args) {
  return (...args2) => {
    return fn(...args, ...args2);
  };
}
