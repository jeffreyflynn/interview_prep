// INSERTION SORT

// Time Complexity: O(n^2)
// Space Complexity: O(1)


// Swap helper function
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}


function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > temp) {
      arr[j+1] = arr[j];
      j--;
    }

    arr[j+1] = temp;
  }
  return arr;
}

console.log(insertionSort([64, 34, 25, 12, 22, 11, 90]));