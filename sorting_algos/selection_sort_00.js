// SELECTION SORT

// Time Complexity: O(n^2)
// Space Complexity: O(1)


// Swap helper function
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}


function selectionSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }

    if (i !== min) swap(arr, i, min);
  }

  return arr;
}

console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));