let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function includesThree(array) {
  return array.includes(3)
}

console.log(includesThree(numbers1));
console.log(includesThree(numbers2));
console.log(includesThree(numbers3));

// If done in node, can simply initialize array and call variable.includes. This could also be
// done here but I wanted to make a function. See below

console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));