function getParams(url) {
  const pattern = /[?&]?(\w+)=(\w+)/g;
  const res = {};
  url.replace(pattern, (k0, k1, k2) => {
    k2 = decodeURIComponent(k2);
    res[k1] =
      res[k1] === undefined
        ? k2
        : Array.isArray(res[k1])
        ? [...res[k1], k2]
        : [res[k1], k2];
  });

  console.log(res);
}

getParams("?a=30&b=40&a=303&a=404");
