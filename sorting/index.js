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
console.log(bubbleSort([4, 5, 1, 2, 6, 90, 34, 23, 13, 34, 23, 56, 78, 47, 0, 9]));

/**
 * selection sort
 */

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]);
      lowest = j;
    }
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }

  return arr;
}

const selSort = (arr) => {
  const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2] = [arr[idx2], arr[idx1]]]);
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]);
      lowest = j;
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}
 
console.log(selectionSort([3, 2, 5, 3, 2, 7, 8, 4, 5]));

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j]
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
console.log(insertionSort([3, 2, 5, 3, 2, 7, 8, 4, 5]));
const data = Array.apply(null, { length: 10000 }).map(Function.call, Math.random)
selectionSort(data);