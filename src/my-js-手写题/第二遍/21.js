function myAssign(target, ...sources) {
  if (target == null) {
    return new Error();
  }

  sources.forEach((src) => {
    // symbol
    for (let s of Object.getOwnPropertySymbols(src)) {
      target[s] = src[s];
    }

    // 字符串
    for (let s of Object.keys(src)) {
      target[s] = src[s];
    }
  });

  return target;
}
