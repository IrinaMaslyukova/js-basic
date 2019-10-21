// 1. Get `100` using `+` operator and numeric value `10`
const num = 10;
console.log(num + String(0));

// 2. You have following string: `Amazon annual revenue of US$232.887 billion` extract revenue and count monthly income.
const str = 'Amazon annual revenue of US$232.887 billion';
// let regex = (/[\d|,|.|e|E|\+]+/g)
let numEl = parseInt(str.match(/\d+/));
console.log(numEl/12);

// 3. Declare variable which will contain logs counter. Log few times with updating this value accordingly.
