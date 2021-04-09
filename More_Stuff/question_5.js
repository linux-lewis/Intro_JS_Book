function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

/*
** The above function first will splits a string into an array of individual strings based on 
** a single space between words. reverse() is then called on the array to reverse the order of 
** the array to begin with the last element, ending with the beginning element. Finally a new
** array is created which contains the length of each string contained in the array made from split
** with the order from the index created using reverse().
*/