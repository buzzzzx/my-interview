const arr = [1, 2, 3];
arr.reduce((pAcc, num) => {
  return pAcc.then((val) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(num);
        resolve();
      }, 1000);
    });
  });
}, Promise.resolve());
