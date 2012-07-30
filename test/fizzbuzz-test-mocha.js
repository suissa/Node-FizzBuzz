// var assert 		= require("assert"), 
// 	mocha		= require("mocha"),
//     fizzbuzz 	= require('../lib/fizzbuzz.js');

// describe('Fizz', function(){
//   describe('modulo de 3 = 0', function(){
//     it('smod % 3 = 0', function(){
//       assert.equal("Fizz", fizzbuzz.isFizz( 3 ));
//     })
//   })
// })


var assert = require('assert');

new assert.AssertionError({message: message, actual: actual, expected: expected})
assert.AssertionError instanceof Error

// Will pass
assert.ok(true);

// Will throw an exception
assert.ok(false);