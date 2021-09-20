const assertEqual = function(actual, expected) {
    if (actual === expected) {
          console.log( `✅✅✅ Assertion Passed ${actual} === ${expected}`);
      } else console.log(`🛑🛑🛑 Assertion failed ${actual} !== ${expected}`);
  };

function findKey(movieRatings, callback) {
    for(const movie in movieRatings) {
        // console.log(rating[stars])
        if(movieRatings[movie].stars === 2) {
            return movieRatings[movie].star
        }
    }
}


const movieRatings = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
}
console.log(assertEqual(findKey(movieRatings, x => x.stars === 2),2));



//return first key that === 2
//else return undefined

// for (let movie of Object.values(movieRatings)) {
//     ...
//     }


// const result = {};

// result["stars"] = 1
// console.log(result)