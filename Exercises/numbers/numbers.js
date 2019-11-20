//1.Assign by hand same value to 3 variables in binary, octal and hexadecimal format.
{
  const num = new Number(2);
  console.log(num);
}
{
  const num = new Number(8);
  console.log(num);
}
{
  const num = new Number(16);
  console.log(num);
}

//2.Implement function extractNumbers which will leave only numbers in passed string.
let number = '123jj';
function extractNumbers(number) {
  return parseFloat(number);
}
console.log(extractNumbers(number));

//3.Declare a variable with decimal value and convert to binary, octal and hexadecimal.
const num = new Number(10);
let str_1 = num.toString(2);
console.log(str_1);
let str_2 = num.toString(8);
console.log(str_2);
let str_3 = num.toString(16);
console.log(str_3);

//4. use Math.random to generate random value from 0 to 100.
const min = 1
const max = 100
let random = Math.floor(Math.random() * (max-min) + min)
console.log(random);

