// const a = 3;
// const b = 2;
// sumValue(a, b);
// console.log("a / b = ", divedeValue(a, b));

// others code
// const c = 5;
// const d = 7;
// sumValue(c, d);
// console.log("a / b = ", divedeValue(c, d));

// // others code
// const e = 9;
// const f = 7;
// sumValue(e, f);
// console.log("a / b = ", divedeValue(e, f));
// // others code

// function sumValue(a, b) {
//   const sum = a + b;
//   console.log("sum of two numbers", sum);
// }

// function divedeValue(a, b) {
//   const divide = a / b;
//   return divide;
// }

// const square = function (num) {
//   return num * num;
// };

// console.log(square);
// console.log(square(4));

// Nested function

function addSquares(a, b) {
  const sa = square(a);
  const sb = square(b);
  function square(num) {
    return num * num;
  }
  return sa + sb;
}

console.log(addSquares(2, 4));
console.log(addSquares(2, 2));
console.log(addSquares(1, 1));
