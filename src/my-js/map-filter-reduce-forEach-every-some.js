/**
 * map
 * @param fn
 * @return {*[]}
 */
function map(fn) {
  if (!Array.isArray(this) || this.length === 0 || typeof fn !== "function") {
    return;
  }

  let len = this.length;
  const res = [];
  for (let i = 0; i < len; i += 1) {
    res.push(fn(this[i], i, this));
  }

  return res;
}

/**
 * filter
 * @param fn
 * @return {*[]}
 */
function filter(fn) {
  if (!Array.isArray(this) || this.length === 0 || typeof fn !== "function") {
    return;
  }

  let res = [];
  for (let i = 0; i < this.length; i += 1) {
    if (fn(this[i], i, this)) {
      res.push(this[i]);
    }
  }

  return res;
}

/**
 * reduce
 * @param fn
 * @param init
 * @return {*}
 */
function reduce(fn, init) {
  if (!Array.isArray(this) || this.length === 0 || typeof fn !== "function") {
    return;
  }

  let startIdx;
  let acc;
  if (init === undefined) {
    acc = this[0];
    startIdx = 1;
  } else {
    acc = init;
    startIdx = 0;
  }

  for (let i = startIdx; i < this.length; i += 1) {
    acc = fn(acc, this[i]);
  }

  return acc;
}

/**
 * forEach
 * @param fn
 */
function forEach(fn) {
  if (!Array.isArray(this) || this.length === 0 || typeof fn !== "function") {
    return;
  }

  for (let i = 0; i < this.length; i += 1) {
    fn(this[i], i, this);
  }
}

function some(fn) {
  if (!Array.isArray(this) || this.length === 0 || typeof fn !== "function") {
    return;
  }

  for (let i = 0; i < this.length; i += 1) {
    if (fn(this[i], i, this)) {
      return true;
    }
  }

  return false;
}

function every(fn) {
  if (!Array.isArray(this) || this.length === 0 || typeof fn !== "function") {
    return;
  }

  for (let i = 0; i < this.length; i += 1) {
    if (!fn(this[i], i, this)) {
      return false;
    }
  }

  return true;
}

// test
Array.prototype.myReduce = reduce;
console.log([2].myReduce((acc, curr) => acc + curr - 1, 2));
