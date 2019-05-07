// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//easier, iterative solution
//we're dealing with a matrix or a 2d array
function steps(n) {
  //iterate through rows
  for (let row = 0; row < n; row++) {
    //tough part: if the current column is equal to or less than the current row, add a stair '#'
    //look at notes
    let stair = "";

    for (let column = 0; column < n; column++) {
      //this for loop will finish entirely on each iteration of row
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    //one iteration complete
    console.log(stair);
  }
}

//recursion solution (harder) - see notes
//  stair.length is important here
function steps2(n, row = 0, stair = "") {
  //base case
  if (n === row) {
    return;
  }
  //end of the row
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  //still assembling stair string
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  //still working on the same row
  steps(n, row, stair);
}

module.exports = steps;
