// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1];

    //last is the chunk array
    if (!last || last.length === size) {
      // add new chunk array + element to chunked
      chunked.push([element]);
    } else {
      //push to existing chunk array
      last.push(element);
    }
  }
  return chunked;
}

//a second approach using array.slice
function chunked2(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    //produce our chunk array that contains the correct size
    chunked.push(array.slice(index, index + size));
    //increment our index by size
    index += size;
  }
  return chunked;
}

module.exports = chunk;
