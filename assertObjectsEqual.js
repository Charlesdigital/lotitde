const assertObjectsEqual = function(actual, expected) {
    // Implement me!
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) {
        console.log( `✅✅✅ Assertion Passed ${inspect(actual)} === ${inspect(expected)}`);
    } else {console.log(`🛑🛑🛑 Assertion failed ${inspect(actual)} !== ${inspect(expected)}`)};
};

// console.log(`Example label: ${inspect(actual)}`);



const assertEqual = function(actual, expected) {
    if (actual === expected) {
          console.log( `✅✅✅ Assertion Passed ${actual} === ${expected}`);
      } else console.log(`🛑🛑🛑 Assertion failed ${actual} !== ${expected}`);
  };

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
};


const eqObjects = function(object1, object2) {
const object1Keys = Object.keys(object1)
const object2Keys = Object.keys(object2)

if (object1Keys.length !== object2Keys.length) {
    return false
}

for (const key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if(!eqArrays(object1[key],object2[key])) {
            return false
        }
    }
    else if (object1[key] !== object2[key]){
        return false
        }
    }
return true
};

assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' })