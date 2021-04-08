
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

/*
function findIntegers(array) {
  return array.map(function(value){
    if (Number.isInteger(value) === true){
      return value
    }
  })
}
** The above solution does returns undefined in areas where the numbers aren't integers
** due to the map function not reducing the array. The correct method to use would be filter
** which returns an array with only truthy values.
*/

function findIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
};
