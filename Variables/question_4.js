const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
 /*
 ** In this code, the first three lines will print out the greetings
 ** to Victor but then an error will be raised. This is because the
 ** constant "Victor" is immutable and thus unable to be reassigned
 ** after declaration.
 */