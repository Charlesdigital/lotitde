const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
const assertEqual = function(actual, expected) {
    if (actual === expected) {
          console.log( `✅✅✅ Assertion Passed ${actual} === ${expected}`);
      } else console.log(`🛑🛑🛑 Assertion failed ${actual} !== ${expected}`);
  };


  const countOnly = function(allItems, itemsToCount) {

      //inside that loop to see if it exist in the object's key
      //then check if the value of the key is true or false
      //if true add it to your result and +1
      let answerResult = {};
      //loop through all through array
     for (const item of allItems) {
        //  console.log('item',item)
         if (itemsToCount[item]) { //1 this is the check if the array matches one of the keys
             if (!answerResult[item]) {     // 2 since we checked at 1 and now we know the keys are matching do an inital count since its not going to be there in the first run
                answerResult[item] = 1
                // console.log('we are in the if statement',answerResult)
             } else {
                 answerResult[item] += 1 //3 this happens after the second time since at 2 we initialized it, anything after the first run will start counting in the else here
                //  console.log('else statement',answerResult)

             }
         }
     }
     return answerResult;
}
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


console.log(assertEqual(result1["Jason"], 1));




















