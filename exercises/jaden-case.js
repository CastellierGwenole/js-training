'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(string) {
    let rejex =/\w\S*/g;
    string = string.replace(rejex, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    return string
};

//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase("You must write your own tests"), "You Must Write Your Own Tests")
// End of tests */
