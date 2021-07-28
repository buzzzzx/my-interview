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
 *    会调用两次超类型构造函数
 */
function Dog() {
  Animal.call(this);
  this.name = "dog";
}
Dog.prototype = new Animal();

/**
 * 4. 原型式继承
 *  缺点：
 *    会
 */
