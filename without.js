const assertArraysEqual = function(actual, expected) {
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

function without(array1, array2) {
    let resultArray = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) === -1) {
            resultArray.push(array1[i])
        }
    }
    return resultArray
}

assertArraysEqual(eqArrays(without([1, 2, 3], [1]),[2,3]), true); // => [2, 3]
// (without(["1", "2", "3"], [1, 2, "3"]));


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(eqArrays(without(words, ["lighthouse"]), ["hello", "world"]),true);
