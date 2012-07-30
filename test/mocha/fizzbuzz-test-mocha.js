var assert 		= require("assert"), 
    fizzbuzz 	= require('../../lib/fizzbuzz-module.js');

describe('isFizz', function(){
  describe('6 must be Fizz', function(){
    it('should return true for 6', function(){
      assert.equal(true, fizzbuzz.isFizz( 6 ));
    })
  })
})
describe('isBuzz', function(){
  describe('10 must be Buzz', function(){
    it('should return true for 10', function(){
      assert.equal(true, fizzbuzz.isBuzz( 10 ));
    })
  })
})
describe('isFizzBuzz', function(){
  describe('15 must be FizzBuzz', function(){
    it('should return true for 15', function(){
      assert.equal(true, fizzbuzz.isFizzBuzz( 15 ));
    })
  })
})
