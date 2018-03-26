'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :
let nbr = 0;

function multiply(arg, arg2) {
    nbr = 0;
    if(arg == 0 || arg2 == 0){
        return 0
    }
    
    if (arg2 < 0) {
        arg2 = - arg2
        for (let i = 0; i < arg2; i++) {
            nbr = nbr + arg
        }
        return - nbr
    }

    if (arg2 > 0) {

        for (let i = 0; i < arg2; i++) {
            nbr = nbr + arg
        }
        return  nbr
    }


}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
