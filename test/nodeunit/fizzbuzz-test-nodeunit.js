var assert 		= require("assert"), 
    fizzbuzz 	= require('../../lib/fizzbuzz-module.js');

exports['Fizz'] = function (test) {
    test.equal(fizzbuzz.isFizz(6), true);
    test.done();
};
exports['Buzz'] = function (test) {
    test.equal(fizzbuzz.isBuzz(10), true);
    test.done();
};
exports['FizzBuzz'] = function (test) {
    test.equal(fizzbuzz.isFizzBuzz(15), true);
    test.done();
};