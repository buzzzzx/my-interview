function getUrlParam(url) {
  const pattern = /[?&]?(\w+)=(\w+)/g;
  const res = {};
  url.replace(pattern, function (k0, k1, k2) {
    k2 = decodeURIComponent(k2);
    res[k1] === undefined ? (res[k1] = k2) : (res[k1] = [...res[k1], k2]);
  });
}
