function mergePromises(ajaxPromises) {
  const data = [];
  let promise = Promise.resolve();
  ajaxPromises.forEach((ajax) => {
    promise = promise.then(ajax).then((res) => {
      data.push(res);
      return data;
    });
  });
  return promise; // 最后 promise 的终值就是 data
}

const time = (timer) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timer);
  });
};

const ajax1 = () =>
  time(2000).then(() => {
    console.log(1);
    return 1;
  });
const ajax2 = () =>
  time(1000).then(() => {
    console.log(2);
    return 2;
  });
const ajax3 = () =>
  time(1000).then(() => {
    console.log(3);
    return 3;
  });

mergePromises([ajax1, ajax2, ajax3]).then((data) => {
  console.log("done");
  console.log(data); // data 为 [1, 2, 3]
});
