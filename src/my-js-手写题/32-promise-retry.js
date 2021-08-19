Promise.retry = function (fn, times) {
  return new Promise(async (resolve, reject) => {
    while (times) {
      times -= 1;
      try {
        const res = await fn();
        resolve(res);
        break;
      } catch (e) {
        if (!times) {
          reject(e);
        }
      }
    }
  });
};
