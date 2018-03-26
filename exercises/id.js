'use strict'

/*
 * Create a function `id` that takes one argument and return it
 *
 * @notions Functions
 */

// Your code :

//* Begin of tests
const assert = require('assert')

function id(arg) { return arg} ;

assert.strictEqual(typeof id, 'function')
assert.strictEqual(id.length, 1)
assert.strictEqual(id(5), 5)
assert.strictEqual(id('pouet'), 'pouet')
assert.strictEqual(id(assert), assert)
// End of tests */
