// Sorting Algorithms
/* Sorting is the process of re-arranging items in a collection (e.g an array) so that items are in some kind of order*/

const swap = (arr, idx1, idx2) => {
  let temp = arr[id1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

const swap2 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([4,5,1,2,6,90,34,23,13,34,23,56,78,47,0,9]));