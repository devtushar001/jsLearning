const a = [4, 1, 7, 8, 6, 54, -4, -7, -2, 4, 7, -7];

const firstNeg = (num) => {
  return num < 0;
};

const result = a.find(firstNeg);
console.log(result);

const bresult = a.findIndex(firstNeg);
console.log(bresult);

a.forEach((num, i) => {
  console.log(num / i);
});
