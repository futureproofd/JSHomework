// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxchar = "";

  //build object key/value (very useful for many string problems!)
  for (let char of str) {
    //for each character, add it to our charMap object and set it's value to a NUMBER occurence
    charMap[char] = charMap[char] + 1 || 1;
  }

  //now iterate through the object (note: 'in' for our short loop in object syntax)
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxchar = char;
    }
  }
  return maxchar;
}

module.exports = maxChar;
