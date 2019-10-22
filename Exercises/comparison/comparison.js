//1. Try comparison operators `>`, `<`, `===`, '<=', '>='  with operands of different types, and see results.
const a = 4;
const b = '5';
if (a > b || a < b) {
  console.log('correct!');
} else if (b === b && b <= b && b >= b) {
  console.log('Yes!');
}
