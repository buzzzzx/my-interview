let imgList = [...document.getElementsByTagName("img")];
const length = imgList.length;

const lazyLoad = (function () {
  let count = 0;
  return function () {
    let deletes = [];
    imgList.forEach((img, index) => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        img.src = img.dataset.src;
        count += 1;
        deletes.push(index);
        if (count === length) {
          document.removeEventListener("scroll", lazyLoad);
        }
      }
    });
    imgList = imgList.filter((img, index) => !deletes.includes(index));
  };
})();

document.addEventListener("scroll", lazyLoad);
