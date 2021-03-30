let firstName = '';
let lastName = '';

function getName(qfirst, qlast) {
  let rlSync = require('readline-sync');
  firstName = rlSync.question(qfirst);
  lastName = rlSync.question(qlast);
};

getName("What is your first name?\n", "What is your last name?\n")
console.log(`Hello, ${firstName} ${lastName}!`);