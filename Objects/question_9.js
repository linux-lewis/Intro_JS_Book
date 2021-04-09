let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

/*
** This program logs 'hi' and 'hello' to the console. This is because the function bar is able to
** call and mutate the property a of argument 1 (foo) because this is a property of an object. The 
** output of qux remains the same because primitive values (strings) are immutable. In this case the
** argument2 value is reassigned within the function, but does not alter qux itself. So it remains 'hello'
*/