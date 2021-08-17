function myReduce(fn, init) {
  if (!Array.isArray(this) || this.length === 0 || typeof fn !== "function") {
    return;
  }

  let acc;
  let start;
  if (init !== undefined) {
    acc = init;
    start = 0;
  } else {
    acc = this[0];
    start = 1;
  }

  for (let i = start; i < this.length; i += 1) {
    acc = fn(acc, this[i]);
  }

  return acc;
}
