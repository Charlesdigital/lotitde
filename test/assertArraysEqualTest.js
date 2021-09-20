const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 3, 3], [1, 2, 3]), false);