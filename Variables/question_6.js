const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/*
** This code will not return an error and log 'bar'. The constant foo
** is first declared outside of the block that the second declaration of 
** foo, thus the second declaration does not attempt to alter the first
** which would cause an error.
*/