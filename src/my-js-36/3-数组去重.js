// ES5
function unique(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}

// ES6
function uniqueES6(arr) {
  return [...new Set(arr)];
}
