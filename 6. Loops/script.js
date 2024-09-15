// for (let i = 1; i <= 100; i = i + 17) {
//   console.log("Tushar", i);
// }
/*
let i = 0;
while (i < 34) {
  console.log("i = ", i);
  i++;
}

*/
/*
let step = 2;
do {
  console.log("step = ", step);
  step += 1;
} while (step < 5);
*/

// let step = 0;
// while (step < 5) {
//   console.log("step =", step);
//   step++;
//   if (step === 2) {
//     break;
//   }
// }

let step = 0;
while (step < 5) {
  step++;
  if (step === 2) {
    continue;
  }
  console.log("step =", step);
}
