'use strict'

/*
 * Create a function `repeat` that takes a String and a Number
 * and return the repeated string by the given number
 * Like the method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 * Of course you may not use the method directly
 *
 */
function repeat(string, num) { 
    let i = 0;
    let text = '';
    while ( i < num ) {
        text = text + string;
        i = i + 1;
    }
    return text;
};
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof repeat, 'function')
assert.strictEqual(repeat.length, 2)
assert.strictEqual(repeat.toString().includes('.repeat'), false)
assert.strictEqual(repeat('a', 3), 'aaa')
assert.strictEqual(repeat('ba', 10), 'babababababababababa')
assert.strictEqual(repeat('pouet', 2), 'pouetpouet')
assert.strictEqual(repeat('haha', 1), 'haha')
assert.strictEqual(repeat('hehehe', 0), '')
// End of tests */
