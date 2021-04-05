function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

/*
** The above code would print 'Not Empty'. Even though the inserted array is empty
** an empty array is truthy and so the expression evaluates to true.
*/