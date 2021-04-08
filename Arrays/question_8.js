let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

/*
function oddLengths(arr) {
  return arr.reduce((accumulator, element) => {
    let length = element.length;
    accumulator = [];
    if (length % 2 !== 0){
      return accumulator.push(length)
    }

  })
}
** Close here but let the initialization of the accumulator be a variable then have the accumulator
** be an empty array at the end of the function
*/

function oddLengths(arr) {
  return arr.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 !== 0) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []); // empty accumulator array at the end of the function. Gets updated each iteration
};