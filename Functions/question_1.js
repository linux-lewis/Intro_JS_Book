let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/*
** In this case the console would log 1. Since the bar variable is declared on the inner
** scope of the function on line 3, it does not affect the variable bar on line 1. Thus
** runnning foo() has no affect on the output.
*/