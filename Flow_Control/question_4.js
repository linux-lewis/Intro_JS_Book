function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/*
** This code logs 'Product2', 'Product3', and 'Product not found!' to the console
** due to the lack of break points for each case. Once the code matches the correct case
** the code falls through and prints the other two statements.
*/