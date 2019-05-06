// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

//don't cheat and use the reverse function
function reverse2(str) {
  let reversed = "";
  //avoid classic for loop syntax(so many possibilities for typos)
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

//another version (starting arg '' passed into arrow function)
// reversed is our accumulator, char is the current element in the array
function reverse3(str) {
  str.split("").reduce((reversed, char) => {
    return char + reversed;
  }, "");
}

module.exports = reverse;
