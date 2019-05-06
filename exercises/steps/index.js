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
  for (let i = 1; i < n; i++) {
    //iterate thorugh columns
    //tough part: if the current column is equal to or less than the current row, add a stair '#'
    //look at notes
  }
}

//recursion solution

module.exports = steps;
