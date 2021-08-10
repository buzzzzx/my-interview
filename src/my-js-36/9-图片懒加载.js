/**
 * 几个关键的 API：
 *    - ele.getBoundingClientRect 返回一个 DomRect 对象包含位置（left, top, right, bottom 相对于视口左上角的位置）和长宽信息
 *    - window.innerHeight 视口的高度
 */
let imgList = [...document.querySelectorAll("img")];
const len = imgList.length;

const imgLazyLoad = (function () {
  let count = 0;
  return function () {
    const deletes = [];
    imgList.forEach((img, index) => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        img.src = img.dataset.src;
        count += 1;
        deletes.push(index);
        if (count === len) {
          document.removeEventListener("scroll", imgLazyLoad);
        }
      }
    });
    imgList = imgList.filter((img, index) => !deletes.includes(index));
  };
})();

document.addEventListener("scroll", imgLazyLoad);
