// 1. Create a function declaration, function expression, lambda function, and using function object.
function func() {}
const funcDec = function(){};
const funcLam = () => {};
new Function ();
// 2. Get parameters amount of function `takeMyParametersAmount`.
function takeMyParametersAmount(a, b){
  return a + b;
}
//2. Create a function and log all passed parameters to it. Check the `length` of this function.
function some(a, b){
  console.log(a);
  console.log(b);
  console.log(some.length);
}
//3. Using anonymous function encapsulate function body from global scope.
const anon = function(){
  const str = 'Hello';
  console.log(str);
};
anon();