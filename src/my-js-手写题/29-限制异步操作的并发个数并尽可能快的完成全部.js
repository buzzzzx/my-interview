function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      console.log("一张图片加载完成");
      resolve(img);
    };
    img.onerror = function () {
      reject(img);
    };

    img.src = url;
  });
}

const urls = [
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png",
];

/**
 * 问题：任何时刻同时下载的链接数量不可以超过3个。
 *
 * 既然题目的要求是保证每次并发请求的数量为3，那么我们可以先请求urls中的前面三个(下标为0,1,2)，
 * 并且请求的时候使用Promise.race()来同时请求，三个中有一个先完成了(例如下标为1的图片)，
 * 我们就把这个当前数组中已经完成的那一项(第1项)换成还没有请求的那一项(urls中下标为3)
 * 直到urls已经遍历完了，然后将最后三个没有完成的请求(也就是状态没有改变的Promise)用Promise.all()来加载它们。
 */
function limitLoad(urls, handler, limit) {
  const copied = [].concat(urls);
  const promises = copied.splice(0, limit).map((url, index) => {
    return handler(url).then(() => index);
  });

  return copied
    .reduce((pAcc, url) => {
      return pAcc
        .then(() => {
          return Promise.race(promises);
        })
        .then((index) => {
          promises[index] = handler(url).then(() => index); // 替换新的请求 url 的 promise
        })
        .catch((reason) => console.error(reason));
    }, Promise.resolve())
    .then(() => {
      return Promise.all(promises);
    });
}
