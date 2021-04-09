function isNegativeZero(number) {
  if (1 / number === -Infinity) {
    return true;
  } else {
    return false;
  }
}

console.log(isNegativeZero(-0));
console.log(isNegativeZero(0));
console.log(isNegativeZero(5));
console.log(isNegativeZero(-5));

// Simpler answer from solution

function isNegativeZeroSolution(value) {
  return 1 / value === -Infinity;
}