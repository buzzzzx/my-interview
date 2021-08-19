function Singleton(name) {
  this.name = name;
}

Singleton.getInstance = (function () {
  let instance = null;
  return function (name) {
    if (instance) {
      return instance;
    }
    return new Singleton(name);
  };
})();
