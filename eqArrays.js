const assertEqual = function(actual, expected) {
    if (actual === expected) {
          console.log( `✅✅✅ Assertion Passed ${actual} === ${expected}`);
      } else console.log(`🛑🛑🛑 Assertion failed ${actual} !== ${expected}`);
  };



  function eqArrays(array1, array2) {
  for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
        return false
    }
  }
  return true;
}


// function eqArrays(array1, array2) {
//     for(let i = 0; i < array1.length; i++) {
//       if(array1[i] === array2[i]) {

//       } else return false;
//     }
//     return true;
//   }


// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), false);