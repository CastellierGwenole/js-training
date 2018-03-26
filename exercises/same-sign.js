
'use strict'

/*
 * Create the function `sameSign` that takes 2 numbers arguments and check
 * if they both have the same sign
 *
 * @notions Functions, If-Else
 */

// Your code :
let okarg = undefined;
let okarg2 = undefined;
function sameSign(arg, arg2){
    if(arg == 0 && arg2 == 0){
        return true
    }
    if(arg > 0){
      okarg = true
    }
    else{
        okarg = false
    }
    
    if(arg2 >= 0){
        okarg2 = true
    }
    else{
        okarg2 = false
    }

    if(okarg == okarg2){
        return true
    }
    else{
        return false
    }
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof sameSign, 'function')
assert.strictEqual(sameSign.length, 2)
assert.notStrictEqual(sameSign, Math.sameSign)
assert.strictEqual(sameSign(-2, -1), true)
assert.strictEqual(sameSign(0, 0), true)
assert.strictEqual(sameSign(12, 3232), true)
assert.strictEqual(sameSign(1, -1), false)
assert.strictEqual(sameSign(-231, 1), false)
assert.strictEqual(sameSign(-231, 0), false)
assert.strictEqual(sameSign(0, 231), false)
assert.strictEqual(sameSign(231, -233), false)
// End of tests */
