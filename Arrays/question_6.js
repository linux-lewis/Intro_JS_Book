let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(array) {
  let length = array.map((element) => element.length);
  return length.filter((num) => num % 2 !== 0);
};

/// Similar but slightly different from solution below. Maybe related to readability?

function oddLengthsSolution(strings) {
  let lengths = strings.map((letters) => letters.length);
  let oddLengths = lengths.filter((number) => number % 2 === 1);
  return oddLengths;
}

console.log(oddLengthsSolution(arr));