// A set is a group of definite, distinct objects
// A set is a group of unordered unique(no duplicates) elements
// The native set object only has one property, size(integer)

let exampleSet = new Set();
console.log(exampleSet.add(1)); // Set { 1 }
console.log(exampleSet.add(2)); // Set { 1 }
console.log(exampleSet.delete(1)) // true

// Set.has does a quick lookup to check whether an element exists within a set
console.log(exampleSet.has(2)) // true

// Intersection
// Intersection checks for common elements within two sets
const intersectingSets = (setA, setB) => {
  let Intersection = new Set();

  for (let elem of setB) {
    if (setA.has(elem)) {
      Intersection.add(elem)
    }
  }
  return Intersection;
}
let setA = new Set([2, 3, 4, 2, 5, 7, 8]);
let setB = new Set([3, 5, 6, 7, 2, 9, 8]);
console.log(intersectingSets(setA, setB));

// isSuperset
// a set is a superset of another set if it contains all the element of the other set
// implementation
const isSuperset = (setC, subset) => {
  for (let elem of subset) {
    if (!setC.has(elem)) {
      return false
    }
    return true
  }
}
// example
let setC = new Set([1, 2, 3, 6, 4, 5]);
let setD = new Set([1, 4, 5]);
let setE = new Set([8, 3]);
console.log(isSuperset(setC, setD)); // true
console.log(isSuperset(setC, setE)); // false

// Union
// The union of two sets combines elements from both sets.
// the function below returns a new set with both elements without duplicates
const unionSet = (setF, setG) => {
  let union = new Set(setF);
  for (let elem of setG) {
    union.add(elem);
  }
  return union;
}
// example
let setF = new Set([1, 3, 6, 4, 8, 9, 9]);
let setG = new Set([9, 5, 3, 8, 0]);
let setH = new Set([17, 52, 3, 42, 90]);
console.log(unionSet(setF, setG));
console.log(unionSet(setF, setH));

// Difference
// The difference of setA from setB is all of the elements in setA that are not in setB
// The below function performs the difference operation usin the native delete method
const differenceSets = (setI, setJ) => {
  let difference = new Set(setI);
  for (let elem of setJ) {
    difference.delete(elem);
  }
  return difference;
}
// example
let setI = new Set([3, 4, 5, 6, 2, 6, 7, 9, 0, 3, 5, 6, 7, 8, 3, 4]);
let setJ = new Set([4, 6, 43, 13, 2, 4, 5, 78, 35, 10, 11, 12, 45]);
console.log(differenceSets(setI, setJ));
