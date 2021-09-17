const assertEqual = function(actual, expected) {
    if (actual === expected) {
          console.log( `✅✅✅ Assertion Passed ${actual} === ${expected}`);
      } else console.log(`🛑🛑🛑 Assertion failed ${actual} !== ${expected}`);
  };


  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };


  function findKeyByValue(shows, value) {
    for(let key in shows){
      if(shows[key] === value){
          return key;
      }
  }
  return undefined;
}

// scan and return the first value
//if no keys return undefined


  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);