function eqArrays(array1, array2) {
    if(array1.length !== array2.length) {
        return false
    }
    for(let i = 0; i < array1.length; i++) {
      if(array1[i] !== array2[i]) {
          return false
      }
    }
    return true;
}

    const assertArraysEqual  = function(actual, expected) {
        if (eqArrays(actual, expected)) {
              console.log( `✅✅✅ Assertion Passed ${actual} === ${expected}`);
          } else {console.log(`🛑🛑🛑 Assertion failed ${actual} !== ${expected}`)};
      };

const letterPositions = function(sentence) {
    const results = {};
    // const removeSpace = sentence.replace(/ /g, "")
    for(i = 0; i < sentence.length; i++) {
        if (sentence[i] !== " ") {
        if (!results[sentence[i]]) {
            //i is the index, sentence[i] value of input array,
        results[sentence[i]] = [i] // key value pair
    } else {
        results[sentence[i]].push(i)
        }
     }
    }
    return results;
}
    // logic to update results here


console.log(letterPositions("lighthouse in the house"));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));

//1. i is the index
//2. sentence[i] value of the input array at index i
//3. results[sentence[i]] give you the key of the result object
//4. results[i] value of the object