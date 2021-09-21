// const assertEqual = require('../assertEqual');
// const tail = require('../tail');


// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const assert = require('chai').assert;
const tail   = require('../tail');
const result = tail(["Hello", "Lighthouse", "Labs"]);


describe("#tail", () => {
    it("ensure we get back two elements", () => {
      assert.strictEqual(result.length, 2)
    });
    it("ensure first element is Lighthouse", () => {
      assert.strictEqual(result[0], "Lighthouse")
    });
    it("ensure second element is Labs", () => {
      assert.strictEqual(result[1], "Labs");
    });
});
