// BUBBLE SORT

/* Sudo Code *//*

  * compare the first item with the second
    * if the first is greater than the second, swap them so that the larger value is always on the right
  * do the same thing with the 2nd element and the 3rd element
    * repeat this process with every i+1 element until you reach the last item 

*/

function bubbleSort(arr) {

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

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90] ))