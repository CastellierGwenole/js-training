'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 * and wrapped by `*`
 *
 */
function whisper(string){ return string.toLowerCase() };

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.deepStrictEqual(whisper('BONJOUR'), 'bonjour')
assert.deepStrictEqual(whisper('tEsT'), 'test')
assert.deepStrictEqual(whisper('Guy'), 'guy')
// End of tests */
