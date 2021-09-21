
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');



// function eqArrays(array1, array2) {
//     if(array1.length !== array2.length) {
//         return false
//     }
//     for(let i = 0; i < array1.length; i++) {
//       if(array1[i] !== array2[i]) {
//           return false
//       }
//     }
//     return true;
// }

//     const assertArraysEqual  = function(actual, expected) {
//         if (eqArrays(actual, expected)) {
//               console.log( `✅✅✅ Assertion Passed ${actual} === ${expected}`);
//           } else {console.log(`🛑🛑🛑 Assertion failed ${actual} !== ${expected}`)};
//       };

const middle = function(array) {
let middleArray = [];
if(array.length <= 2) {
    return middleArray;
}
let indexOdd = Math.floor((array.length - 1)/2)
let middleOdd = array[indexOdd]
let indexEven = Math.floor(array.length/2)
let middleEven = array[indexEven]
if (array.length % 2 === 0) {
    middleArray.push(middleOdd, middleEven)
} else {
    middleArray.push(middleOdd)
}
return middleArray
}

module.exports = middle;


// console.log(middle([1]))
// console.log(middle([1, 2]))


// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]

// console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]



      //if not middle return empty array
      //if odd return middle element
