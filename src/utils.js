export function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

// hello => Hello
// HELLO => Hello
// boTTLE => Bottle
// animal => Animal
