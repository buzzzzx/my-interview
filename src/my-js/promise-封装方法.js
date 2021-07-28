/**
 * Promise 封装 Ajax
 * @param method
 * @param url
 * @param data
 */
function myAjax(method, url, data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.send(data);
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.status);
      }
    };
  });
}

/**
 * 异步加载图片
 * @param url
 */
function loadImageAsync(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload(() => {
      resolve(img);
    });
    img.onerror(() => {
      reject(new Error("error url" + url));
    });
    img.src = url;
  });
}
