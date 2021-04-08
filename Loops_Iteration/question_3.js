let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/*
** The above code will result in an infinite loop due to the assignment of counter within the while loop.
** since counter is set = 1 the loop will run logging 1 each time, then incrementing to 2 and
** restarting the loop. This will never reach the break code as counter will = 2 each time.
*/