// MERGE SORT

// Time Complexity: O(n log(n))
// Space Complexity: O(n)

// Merge sort is a divide and conquer algorithm.

/* Sudo Code *//*

    1. Divide the unsorted list into n sublists, each containing 1 element
        * a list of one element is considered sorted

    2. Repeatedly merge the sublists to produce new sorted sublists until only one sublist remains
*/


// Swap helper function
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}


function mergeSort_topDown(arr) {
  if (arr.length < 2) return arr;

  let middle = Math.floor(arr.length / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);

  return mergeSort_topDown(mergeSort_topDown(left), mergeSort_topDown(right));
}


function mergeTopDown(left, right) {
  const arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
}

console.log(mergeSort_topDown([64, 34, 25, 12, 22, 11, 90]));