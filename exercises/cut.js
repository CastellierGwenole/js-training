'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 first characters
 * Create the function `cutLast` that takes a string and remove the 2 last charcters
 * Create the function `cutFirstLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

//* Begin of tests
const assert = require('assert')

function cutFirst (string) { return string.substr(2) }
function cutLast (string) { return string.substr(0, string.length - 2) }
function cutFirstLast(string) { return string.substring(2, string.length - 2); }

    assert.strictEqual(typeof cutFirst, 'function')
    assert.deepStrictEqual(cutFirst('bonjour'), 'njour')
    assert.deepStrictEqual(cutFirst('test'), 'st')
    assert.deepStrictEqual(cutLast('bonjour'), 'bonjo')
    assert.deepStrictEqual(cutLast('test'), 'te')
    assert.deepStrictEqual(cutFirstLast('bonjour'), 'njo')
    
// End of tests */
