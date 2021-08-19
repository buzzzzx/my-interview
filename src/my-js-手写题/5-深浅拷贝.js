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
  // 解决循环引用
  const map = new Map();

  function copy(obj) {
    if (typeof obj !== "object" || obj == null) {
      return obj;
    }

    if (map.has(obj)) {
      return map.get(obj);
    }

    const res = obj instanceof Array ? [] : {};

    map.set(obj, res);

    // symbol 属性
    for (let sym of Object.getOwnPropertySymbols(obj)) {
      res[sym] = typeof obj[sym] === "object" ? copy(obj[sym]) : obj[sym];
    }
    // 字符串 属性
    for (let key of Object.keys(obj)) {
      res[key] = typeof obj[key] === "object" ? copy(obj[key]) : obj[key];
    }

    return res;
  }

  return copy(obj);
}

// test
const A = { a: 1 };
A.A = A;
console.log(deepCopy(A));
