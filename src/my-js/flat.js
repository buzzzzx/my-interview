/**
 * 深度 flat
 * @param array
 * @return {*}
 */
function flat(array) {
  return array.reduce((acc, curr) => {
    return Array.isArray(curr) ? acc.concat(flat(curr)) : acc.concat(curr);
  }, []);
}

function flat1(array, deep = 1) {
  return array.reduce((acc, curr) => {
    return Array.isArray(curr) && deep > 1
      ? acc.concat(flat(curr, deep - 1))
      : acc.concat(curr);
  }, []);
}

// test
console.log(flat1([1, 2, [3, 4, 5], [6, [7, 8, [9]], 10]], 2));
