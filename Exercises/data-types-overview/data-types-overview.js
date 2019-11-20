//1. Declare a variable on each type using two options: plain creation, creation with constructor.1
let a = 123;
let a_1 = new Number(123);
let b = 'Hello';
let b_1 = new String('Hello');
let c = true;
let c_1 = new Boolean(true);
let d = null;
let e = undefined;
let f = Symbol('Hi');
let g = {
  1: 'First',
  2: 'Second'
};

// 2.Use operator typeof on each of them.
console.log(typeof (a), typeof (a_1), typeof (b), typeof (b_1), typeof (c),
  typeof (c_1), typeof (d), typeof (e), typeof (f), typeof (g));

//3. Demonstrate object's references.
let obj = {
  1: 'Apple',
  2: 'banana',
};
let copyObj = Object.assign({}, obj);
console.log(copyObj);

//4. Demonstrate string's backticks features.
let dog = 'Dogs';
let food = 'sausages';
console.log(`${dog} likes ${food}`);
