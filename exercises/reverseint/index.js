// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/*
 Three useful hints:
 toString
 parseInt - convert back to int
 Math.sign() , returns -1 if negative, returns 1 if positive
*/

function reverseInt(n) {
  //first reverse
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  if (n < 0) {
    return parseInt(reversed) * -1;
  }
  return parseInt(reversed);
}

function reverseIntBetter(n) {
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");
  //same as above, but math.sign should return either -1 or 1
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
