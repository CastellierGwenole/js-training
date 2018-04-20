'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 */
function yell(string) { return string.toUpperCase(); };

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.deepStrictEqual(yell('bonjour'), 'BONJOUR')
assert.deepStrictEqual(yell('tEsT'), 'TEST')
assert.deepStrictEqual(yell('Guy'), 'GUY')

// End of tests */
