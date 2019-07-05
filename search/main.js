// Day 3
// linear search
const usa = ["Alabama - AL", "Alaska - AK", "Arizona - AZ", "Arkansas - AR", "California - CA", "Colorado - CO", "Connecticut - CT",
  "Delaware - DE", "Florida - FL", "Georgia - GA", "Hawaii - HI", "Idaho - ID", "Illinois - IL", "Indiana - IN", "Iowa - IA", "Kansas - KS", "Kentucky - KY", "Louisiana - LA", "Maine - ME", "Maryland - MD", "Massachusetts - MA", "Michigan - MI", "Minnesota - MN", "Mississippi - MS", "Missouri - MO", "Montana - MT", "Nebraska - NE", "Nevada - NV", "New Hampshire - NH", "New Jersey - NJ", "New Mexico - NM", "New York - NY", "North Carolina - NC", "North Dakota - ND", "Ohio - OH", "Oklahoma - OK", "Oregon - OR", "Pennsylvania - PA", "Rhode Island - RI", "South Carolina - SC", "South Dakota - SD", "Tennessee - TN", "Texas - TX", "Utah - UT", "Vermont - VT", "Virginia - VA", "Washington - WA", "West Virginia - WV", "Wisconsin - WI", "Wyoming - WY"]


const numsArray = [];

const linear = (numsArray, x) => numsArray.indexOf(x);

console.log(linear([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));

//  Binary Search
const binarySearch = (arr, elem) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  let midIndex = Math.ceil((startIndex + endIndex) / 2);
  
  console.log(startIndex, midIndex, endIndex);
  while (arr[midIndex] !== elem && startIndex <= endIndex) {
    if (elem < arr[midIndex]) endIndex = midIndex - 1;
    else startIndex = midIndex + 1;
    
    midIndex = Math.floor((startIndex + endIndex) / 2);
  }
  console.log(startIndex, midIndex, endIndex);
  return arr[midIndex] === elem ? midIndex : -1
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 100));
