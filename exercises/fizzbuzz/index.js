// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

/**
 * The key takeaway
 * we use the modulo operator
 * will determine the remainder of a number during division
 *  so 9 % 3 = 0 because 3 goes into 9 exactly 3 times
 * if the result is 0, then it's a multiple of 3
 */

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    //is multiple of 3 or 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;
