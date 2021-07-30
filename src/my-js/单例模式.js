function Singleton(name) {
  this.name = name;
}

Singleton.prototype.getName = function () {
  return this.name;
};

Singleton.getInstance = (function () {
  let instance = null;
  return function (name) {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  };
})();

// test
let a = Singleton.getInstance("ConardLi");
let b = Singleton.getInstance("ConardLi2");
console.log(a === b);
