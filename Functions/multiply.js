function multiply(num1, num2) {
  return num1 * num2;
}

let rlSync = require('readline-sync');
let num1 = Number(rlSync.question("Enter the first number: "));
let num2 = Number(rlSync.question("Enter the second number: "));

console.log(`${num1} * ${num2} = ` + multiply(num1, num2));