{
  let foo = 'bar';
}

console.log(foo);

/*
** This code will return an error due to the variable foo not 
** being initialized in the same scope as the console.log command.
** In this case foo is within the scope block between {} and not able
** to be called from outside.
*/