let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

function sumOfSquares(arr) {
  let squares = arr.map((num) => num * num);
  let sumOfSquares = squares.reduce((accumulator, element) => accumulator + element, 0);
  return sumOfSquares;
};

// Similar but solution does not use the map method

function sumOfSquaresSolution(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}

console.log(sumOfSquaresSolution(array));