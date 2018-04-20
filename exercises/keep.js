'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */

function keepFirst(string) { return string.substring(0, 2)};
function keepLast(string) { return string.substring(string.length - 2, string.length)};
function keepFirstLast(string) { return string.substring(2, string.length)};


//* Begin of tests
const assert = require('assert')

assert.deepStrictEqual(keepFirst('bonjour'), 'bo')
assert.deepStrictEqual(keepLast('bonjour'), 'ur')


// End of tests */
