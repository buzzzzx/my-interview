function render(template, obj) {
  const pattern = /\{\{(\w+)\}\}/g;
  return template.replace(pattern, function (k0, k1) {
    return obj[k1];
  });
}

// test
let template = "我是{{name}}，年龄{{age}}，性别{{sex}}";
let obj = {
  name: "remie",
  age: 12,
};
console.log(render(template, obj));
