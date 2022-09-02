// JS-CC-003 : Merge Arrays
// Purpose of the this coding challenge is to write a code that given two sorted arrays, returns merged array of these inputs.

// For example:

// A = [12, 14, 16]; 
// B = [11, 13, 17];
// expectedOutput = [11, 12, 13, 14, 16, 17];


const arr1 = [12, 14, 16];
const arr2 = [11, 13, 17];

const mergeArr = arr1.concat(arr2);
mergeArr.sort();
console.log(mergeArr);
