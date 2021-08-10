/**
 * forEach
 */
Array.prototype.myForEach = function (fn) {
  if (!Array.isArray(this) || this.length === 0 || typeof fn !== "function") {
    return;
  }

  for (let i = 0; i < this.length; i += 1) {
    fn(this[i], i, this);
  }
};

/**
 * map
 */
Array.prototype.myMap = function (fn) {
  if (!Array.isArray(this) || this.length === 0 || typeof fn !== "function") {
    return;
  }

  const res = [];
  for (let i = 0; i < this.length; i += 1) {
    res[i] = fn(this[i], i, this);
  }

  return res;
};

/**
 * filter
 */
Array.prototype.myFilter = function (fn) {
  if (!Array.isArray(this) || this.length === 0 || typeof fn !== "function") {
    return;
  }

  const res = [];
  for (let i = 0; i < this.length; i += 1) {
    if (fn(this[i], i, this)) {
      res.push(this[i]);
    }
  }

  return res;
};

/**
 * reduce
 */
Array.prototype.myReduce = function (fn, init) {
  if (!Array.isArray(this) || this.length === 0 || typeof fn !== "function") {
    return;
  }

  let acc;
  let start = 0;
  if (init !== undefined) {
    start = 0;
    acc = init;
  } else {
    start = 1;
    acc = this[0];
  }
  for (let i = start; i < this.length; i += 1) {
    acc = fn(acc, this[i]);
  }

  return acc;
};

/**
 * some
 */
Array.prototype.mySome = function (fn) {
  if (!Array.isArray(this) || this.length === 0 || typeof fn !== "function") {
    return;
  }

  for (let i = 0; i < this.length; i += 1) {
    if (fn(this[i], i, this)) {
      return true;
    }
  }

  return false;
};

/**
 * every
 */
Array.prototype.myEvery = function (fn) {
  if (!Array.isArray(this) || this.length === 0 || typeof fn !== "function") {
    return;
  }

  for (let i = 0; i < this.length; i += 1) {
    if (!fn(this[i], i, this)) {
      return false;
    }
  }

  return true;
};
