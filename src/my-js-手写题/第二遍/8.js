function match(template, obj) {
  const pattern = /\{\{(\w+)\}\}/g;
  obj.replace(pattern, (k0, k1) => {
    return obj[k1];
  });
}
