function capTen (string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(capTen('hello World'));
console.log(capTen('goodbye'));