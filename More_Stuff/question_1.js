let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

/*
** The above code will log [1, 4, 3] to the console. This is because the array is stored in it's
** own space in memory which both array1 and array2 points (reference) to. Line 3 mutates the array within the
** stored memory even though it is reassigned by array1, array2 points to the same array that
** was mutated.
*/