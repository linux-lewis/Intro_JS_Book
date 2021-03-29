console.log('5' + 10);
/*
** console.log('5' + 10); will return 510 instead of 15 due to implicit coercion.
** when the + operator is used between a string and number, the value for number
** is coerced to a string, then concatenated as such.  ('5' + 10) becomes ('5' + '10')
** and the output is '510'
*/