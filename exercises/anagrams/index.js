// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  //build a character map out of stringA and stringB
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  //compare sizes
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  //pick a charMap to iterate over
  for (let char in aCharMap) {
    //if the number of occurrences per letter is different, it's not an anagram
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}

//another solution
/*
array.sort() we can sort the strings and check if they're the same
*/
function anagrams2(strA, strB) {
  return cleanString(strA) === cleanString(strB) ? true : false;
}

//helper to remove all edge cases and split to array, sort, join
function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

//build a helper function to build a character map
//DRY principle
function buildCharMap(str) {
  const charMap = {};
  //get rid of those edge cases (spaces, punctuation)
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

module.exports = anagrams;
