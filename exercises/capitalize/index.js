// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//easier to read solution using javascript standard library methods
//  string.slice() and string.toUpperCase()
function capitalize(str) {
  const words = [];
  //split on the space character to get individual words
  for (let word of str.split(" ")) {
    //cut out the first lowercase letter
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");
}

//a brute force approach, harder to code
//doesn't work well with the very first character ( we can't look to the left )
function capitalize2(str) {
  //create result which is the first character of the input string capitalized
  let result = str[0].toUpperCase();
  //the character to the left of a space is the first letter of the word
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;
