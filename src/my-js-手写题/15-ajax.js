/**
 * 0: 请求未初始化
 * 1: 请求开始发送
 * 2: 请求发送完成等待响应
 * 3: 接收到响应
 * 3: 响应被解析完成
 * @param url
 * @return {*}
 */
function myAjax(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) {
        return;
      }
      if (xhr.status === 200 || xhr.status === 304) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.responseText);
      }
    };
    xhr.send();
  });
}
