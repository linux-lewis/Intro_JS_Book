let x = "5"
x = x + 1
// returns "51"

let y = "5"
y++

/*
** The result here is the number 5. In the above example JavaScript coerces the 1 from x + 1 into a string
** and adds it to the string "5" to make "51". The increment operator ++ instead coerces the string
** "5" into a number and increments it to 6. However since the increment operator is after the variable y
** (post-increment) the return is the original value. If this increment was before y (pre-increment) the 
** return value would be the number 6.
*/