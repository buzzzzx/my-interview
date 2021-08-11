function flatten(arr) {
  if (!Array.isArray(arr)) {
    return;
  }

  return arr.reduce((acc, curr) => {
    return Array.isArray(curr) ? acc.concat(flatten(curr)) : acc.concat(curr);
  }, []);
}

// test
console.log(flatten([1, 2, [3, 4], [5, [6, 7], 8], [9, 10], 11]));

// 给出层数
function flat1(array, deep = 1) {
  return array.reduce((acc, curr) => {
    return Array.isArray(curr) && deep > 1
      ? acc.concat(flat(curr, deep - 1))
      : acc.concat(curr);
  }, []);
}
