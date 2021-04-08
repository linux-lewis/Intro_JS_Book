let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you?\n"));
console.log(`You are ${age} years old`);

for (let increase = 10; increase <= 40; increase += 10) {
  console.log(`In ${increase} years, you wil be ${age + increase} years old.`);
}