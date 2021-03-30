function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

/*
** This code will not log anything to the console.
** The scream function ends at the return statement and does not execute the
** console.log function in the function body.
*/