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
    //check if the length is the same
const object1Keys = Object.keys(object1)
const object2Keys = Object.keys(object2)
// console.log(Object.keys(object1)) gets the key of ab in an array so you can do a for of ['a','b']

if (object1Keys.length !== object2Keys.length) {
    return false
}

for (const key of object1Keys) {
    // console.log("key",key)
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        // console.log("arrays")
        // console.log("eqArray", eqArrays(object1[key],object2[key]))
        if(!eqArrays(object1[key],object2[key])) {
            return false
        }
    }
    else if (object1[key] !== object2[key]){ // return breaks the loop and takes you out of the condition, so you !not: to break the loop, go through everything to check if everything is the same
        return false //return break and takes you out of the condition, so you ! to break the loop and go through everything to check if everythi
        }
    }
return true // return is after the loop statemenet
};
//keys are not the same length


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false






// console.log(object1)

// console.log(object1Keys)
// for (letter of ) {
//     if (  ===) {

//     } else {
//         return false
//     }
//     }

//write the logic first
//break down and comment the broken and then write the code

