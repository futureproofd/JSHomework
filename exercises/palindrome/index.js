// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversed = str
    .split("")
    .reverse()
    .join("");
  return str === reversed;
}

//double comparison with the 'every' helper that we can bring up in the interview
//'i' will be the index (starting 0)
// we compare every char to its mirrored char at the end of the array
//the every function will only continue if the comparison remains true
//the first iteration is length - 0 - 1 (the very last character)
function pal2(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
