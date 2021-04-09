let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];


function allMatches(array, arg) {
  return array.filter((word) => arg.test(word));
}
console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']