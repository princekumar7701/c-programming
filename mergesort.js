function mergeSort(arr) {
  // Base case: an array with 0 or 1 element is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  // Recursively sort the left and right halves
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Merge the sorted halves
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  
  // Compare the first elements of the left and right arrays and push the smaller one
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift()); // shift() removes and returns the first element
    } else {
      result.push(right.shift());
    }
  }

  // Concatenate any remaining elements (one of the arrays will be empty by now)
  return [...result, ...left, ...right];
}

// Example usage:
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
