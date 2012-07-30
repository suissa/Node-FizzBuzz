var assert 		= require("assert"), 
    fizzbuzz 	= require('../../lib/fizzbuzz-module.js');

exports['Fizz'] = function (test) {
    test.equal(fizzbuzz.isFizz(6), true);
    test.done();
};