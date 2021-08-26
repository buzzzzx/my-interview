/**
 * 原型链式继承
 *  缺点：
 *      1. 原型中包含的引用类型属性将被所有实例共享；
 *      2. 子类在实例化时不能给父类构造函数传参数
 */
function Animal() {
  this.colors = ["red", "white", "green"];
}

Animal.prototype.sayHello = function () {
  console.log("Halo");
};

function Dog() {
  this.type = "dog";
}

Dog.prototype = new Animal();

/**
 * 借用构造函数继承
 *  缺点：
 *    1. 必须在构造函数中定义方法，因此函数不能重用
 *    2. 子类无法访问父类原型上的属性
 */
function Animal(name) {
  this.colors = ["red", "white", "green"];
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}

function Cat(name) {
  Animal.call(this, name);
  this.type = "cat";
}

/**
 * 组合继承
 *  缺点:
 *    1. 效率问题：会调用两次超类型构造函数
 */
function Animal(name) {
  this.colors = ["red", "white", "green"];
  this.name = name;
}

Animal.prototype.sayHello = function () {
  console.log("Halo");
};

function Fish(name) {
  Animal.call(this, name);
  this.type = "fish";
}

Fish.prototype = new Animal();
Fish.prototype.constructor = Fish;

/**
 * 原型式继承
 *  缺点：
 *    1. 原型中包含的引用类型会被实例对象共享
 */
function create(o) {
  function F() {}
  F.prototype = o;
  // F.prototype.constructor = F;
  return new F();
}

/**
 * 寄生式继承
 *  缺点:
 *    1. 原型中包含的引用类型会被实例对象共享
 *    2. 做不到函数复用
 */
function create(o) {
  function F() {}
  F.prototype = o;
  // F.prototype.constructor = F;
  return new F();
}

function createAnother(o) {
  const obj = create(o);
  obj.sayHi = function () {
    console.log("hi");
  };
  return obj;
}

/**
 * 寄生组合继承
 *  缺点：
 *    1.
 */
function Animal(name) {
  this.colors = ["red", "white", "green"];
  this.name = name;
}

function Pig(name) {
  Animal.call(this, name);
  this.type = "pig";
}

function inheritPrototype(SubType, SuperType) {
  const obj = create(SuperType.prototype);
  SubType.prototype = obj;
  SubType.prototype.constructor = SubType;
}

inheritPrototype(Pig, Animal);

/**
 * ES6 继承：
 *    - 使用 extends super 关键字
 *    - 子类的原型对象会继承父类的原型对象
 *    - 子类也会继承父类
 *    - ES6 先将父类实例对象的属性和方法加到 this 上，再用子类的构造函数修改 this
 *  和 ES5 继承（寄生式组合）的区别：
 *    1. ES6 中子类会继承父类的属性，ES5 不会
 *    2. super() 与 A.call(this) 是不同的，在继承原生构造函数的情况下（Array），体现得很明显，ES6 中的子类实例可以继承原生构造函数实例的内部属性，而在 ES5 中做不到
 *       ES5 先创造子类的实例对象 this，再将父类的属性添加到 this 上；ES6 先将父类的属性加到 this 上面，再用子类的构造函数修改 this (ES6 中子类没有自己的this，必须执行super()，子类的this是从父类继承的)
 */
// 实现
class A {}
class B {}

Object.setPrototypeOf(A.prototype, B.prototype);
Object.setPrototypeOf(A, B);
