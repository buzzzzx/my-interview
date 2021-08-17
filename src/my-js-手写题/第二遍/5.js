function deep(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  const newObj = Array.isArray(obj) ? [] : {};
  // symbols
  for (let s of Object.getOwnPropertySymbols(newObj)) {
    newObj[s] = typeof obj[s] === "object" ? deep(obj[s]) : obj[s];
  }
  // 字符串属性
  for (let s of Object.keys(newObj)) {
    newObj[s] = typeof obj[s] === "object" ? deep(obj[s]) : obj[s];
  }

  return newObj;
}
