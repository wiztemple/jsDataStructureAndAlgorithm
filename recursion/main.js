const countDown = num => {
  if (num <= 0) {
    return;
  }
  num--;
  countDown(num);
}
countDown(10);

const sumRange = (num) => {
  if (num === 1)  return 1
  return num + sumRange(num - 1);
}
console.log(sumRange(5));

const factorial = (num) => {
  if (num === 1) return 1
  return num * factorial(num - 1);
}

console.log(factorial(5));

// helper method recursion
const collectOddValues = (arr) => {
  let result = [];

  const helper = helperInput => {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}
console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14]));

// pure recursion
const collectOdd = arrayList => {
  let newArr = [];

  if (arrayList.length === 0) return newArr;

  if (arrayList[0] % 2 !== 0) { newArr.push(arrayList[0]) };

  newArr = newArr.concat(collectOdd(arrayList.slice(1)));
  return newArr;
}

console.log(collectOdd([1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14]));
// const oddVal = items => {
//   let odd = [];
//   for (let i = 0; i >= items.length; i++){
//     return odd.push(items[i] % 2 !== 0);
//   }
//   console.log(odd);
// }
// console.log(oddVal([1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14]));

// Day 3 - Search Algorithms
 
