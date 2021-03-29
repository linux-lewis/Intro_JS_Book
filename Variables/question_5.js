let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

/*
** This code will return 'bar' as foo is initialized in the same scope
** as the consol.log command. The initialization of foo in line 3
** is within that code block and on a different scope from the console.log
** command. Even though the console.log command occurs after the second
** declaration of foo, it will print out 'bar'.
*/