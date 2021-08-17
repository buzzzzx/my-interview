// 1. 原型链继承
// Dog.prototype = new Animal();
// 缺点：
//     共享父类实例中的引用类型
//     无法向父类构造函数传参
//
// 2. 借用构造函数继承
// function Dog(name) {
//     Animal.call(this, name);
// }
// 缺点：
//     无法复用函数
//
// 3. 组合继承
// 缺点：
//     会调用两次父类构造函数，效率不高
//
// 4. 原型式继承：出发点是不需要定义构造函数就能实现继承
// function create(obj) {
//     function F() {}
//     F.prototype = obj;
//     return new F();
// }
// 缺点：
//     共享引用类型
//     无法向父类构造函数传参
//
// 5. 寄生式继承
// function createOther(obj) {
//     const newOne = create(obj);
//     newOne.sayHi = function () {
//         console.log("hi");
//     }
//     return newOne;
// }
// 缺点：
//     无法复用函数
//
// 6. 寄生组合式
// function inherit(sub, sup) {
//     const prototype = createOther(sup.prototype);
//     sub.prototype = prototype;
//     sub.prototype.constructor = sub;
// }
//
// 7. ES6
// class A extends B {}
// 实现原理：
//     Object.setPrototypeOf(A, B);
//     Object.setPrototypeOf(A.prototype, B.prototype);
// 区别：
//     ES6 的子类属性会继承父类属性
//     ES6 super 和 B.call(this)，ES5 现有的子类的 this 再将父类的方法属性添加到 this 上
//         ES6 中子类没有自己的 this，调用了 super 后继承的父类的 this
