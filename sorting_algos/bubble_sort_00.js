// BUBBLE SORT 
// O(n^2) time complexity
// O(1) space complexity

/* Sudo Code *//*

  * compare the first item with the second
    * if the first is greater than the second, swap them so that the larger value is always on the right
  * do the same thing with the 2nd element and the 3rd element
    * repeat this process with every i+1 element until you reach the last item 

*/

// Swap helper function
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}


// basic bubble sort 
function basicBubbleSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= arr.length - i - 1; j++) {

      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }

    }
  }

  return arr;
}


// Efficient bubble sort
function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i+1]) {
        swap(arr, i, i+1);
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90] ))