function shallowCopy(obj) {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }
  const res = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = obj[key];
    }
  }
  return res;
}

function deepCopy(obj) {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }
  const res = obj instanceof Array ? [] : {};
  // symbol 属性
  for (let sym of Object.getOwnPropertySymbols(obj)) {
    res[sym] = typeof obj[sym] === "object" ? deepCopy(obj[sym]) : obj[sym];
  }
  // 字符串 属性
  for (let key of Object.keys(obj)) {
    res[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
  }

  return res;
}
