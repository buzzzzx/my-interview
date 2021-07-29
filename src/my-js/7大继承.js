/**
 * 1. 原型链继承：将子类的原型对象改为超类的实例
 *  缺点：
 *    原型对象的引用类型会被所有的实例对象所共享
 *    在创建子类实例的时候，不能向超类传递参数
 */
function Animal() {
  this.colors = ["red", "green", "blue"];
  this.age = 12;
}

function Cat(name) {
  this.name = name;
}

Cat.prototype = new Animal();
let cat1 = new Cat("blue cat");
console.log(cat1.colors);
let cat2 = new Cat("red cat");
cat2.age = 2;
console.log(cat2.colors);
console.log(cat1.age);
cat1.colors.push("yellow");
console.log(cat1.colors);
console.log(cat2.colors);

/**
 * 2. 借用构造函数继承：在子类型的构造函数中调用超类型的构造函数
 *  缺点：
 *    必须在构造函数中定义方法，因此函数不能重用
 *    子类无法访问父类原型上定义的方法
 */
function People() {
  this.name = "people";
}

People.prototype.talk = () => {
  console.log("people talk");
};

function Man() {
  People.call(this);
  this.feature = "tall";
}

const man1 = new Man();
const man2 = new Man();
console.log(man1.name);
console.log(man1.talk); // undefined

/**
 * 3. 组合继承：结合了原型链继承和借用构造函数继承，原型链继承父类原型的属性和方法，借用构造函数继承实例属性
 *  缺点：
 *    效率问题：会调用两次超类型构造函数
 */
function Dog() {
  Animal.call(this);
  this.name = "dog";
}
Dog.prototype = new Animal();

/**
 * 4. 原型式继承：其出发点是即使不自定义类型也可以通过原型来实现对象之间的信息共享
 *  缺点：
 *    和原型链继承一样，实例对象之间会共享引用类型
 */
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

/**
 * 5. 寄生式继承：使用原型式继承获得一个目标对象的浅复制，然后增强这个浅复制的能力
 *  缺点：
 *    也做不到函数复用
 *    和原型链一样，实例对象之间会共享引用类型
 */
function createAnother(o) {
  const obj = object(o);
  obj.foo = function() {
    console.log("say hi");
  }
  return obj;
}

/**
 * 6. 寄生式组合继承： 使用寄生式继承来继承父类的原型，然后将返回的新对象作为子类的原型
 *  优点：只调用了一次父类的构造函数，也避免了组合继承中实例对象和原型对象有同名的属性，效率更高
 */
function inheritPrototype(Subtype, SuperType) {
  let prototype = object(SuperType.prototype);
  prototype.constructor = Subtype;
  Subtype.prototype = prototype;
}

function SuperType(name) {
  this.name = name;
  this.colors = ["r", "g", "b"];
}

function SubType(name, age) {
  SuperType.call(this, name);  // 調用一次
  this.age = age;
}

inheritPrototype(SubType, SuperType);

/**
 * 7. ES6 继承：
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
