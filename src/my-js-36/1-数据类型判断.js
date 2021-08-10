function typeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

function isTypeOf(type, obj) {
  return Object.prototype.toString.call(obj) === `[object ${type}]`;
}

// test typeOf
console.log(typeOf([]));
console.log(typeOf(1));
console.log(typeOf(""));
console.log(typeOf({}));
console.log(typeOf(false));
console.log(typeOf(null));
console.log(typeOf(undefined));

// test isTypeOf
console.log(isTypeOf("Array", []));
console.log(isTypeOf("Number", 1));
console.log(isTypeOf("String", ""));
console.log(isTypeOf("Object", {}));
console.log(isTypeOf("Boolean", false));
