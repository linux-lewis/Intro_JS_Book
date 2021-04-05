
let evenOrOdd = function (x) {
  if (Number.isInteger(x) === true) {
    let remainder = x % 2
    if (remainder === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('The input value was not an integer. Try again');
  }
}

evenOrOdd('a');