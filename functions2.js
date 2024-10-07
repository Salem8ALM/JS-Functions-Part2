function isOdd(n) {
  if (n % 2 === 1) return true;
  else return false;
}

function oddsSmallerThan(n) {
  if (isOdd(n)) return (n - 1) / 2;
  else return n;
}

function squareOrDouble(n) {
  if (isOdd(n)) return n ** 2;
  else return n * 2;
}
const n = 13;
console.log(isOdd(n));
console.log(oddsSmallerThan(n));
console.log(squareOrDouble(n));
