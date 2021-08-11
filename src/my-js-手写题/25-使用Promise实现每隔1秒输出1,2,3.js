const arr = [1, 2, 3];
arr.reduce((p, num) => {
  return p.then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(console.log(num)), 1000);
    });
  });
}, Promise.resolve());
