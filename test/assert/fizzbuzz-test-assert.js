var assert 		= require('assert')
	,util 		= require('util')
	,total 		= 0
	,good		= 0
	,total		= 0
    ,fizzbuzz 	= require('../../lib/fizzbuzz-module.js');
    
try {
    console.log("assert if 6 is Fizz");
	assert.ok(fizzbuzz.isFizz(6), "6 is Fizz")
    passed();
} catch (err) { writeException(err); }
 
try {
    console.log("assert if 10 is Buzz");
	assert.ok(fizzbuzz.isBuzz(10), "10 is Buzz")
    passed();
} catch (err) { writeException(err); }

try {
    console.log("assert if 15 is FizzBuzz");
	assert.ok(fizzbuzz.isFizzBuzz(15), "15 is FizzBuzz")
    passed();
} catch (err) { writeException(err); }


console.log("%d of %d tests passed", good, total);
 
//We need to catch the exception
function writeException(err) {
    console.log("Test failed!");
    util.inspect(err);
    if(err["name"] === "AssertionError") {
        console.log("Message: " + (err["message"] || "None"));
        console.log("Expected: " + err["expected"]);
        console.log("Actual: " + err["actual"]);
        console.log("Operation: " + err["operator"]);
    }
    console.log("");
    total = total + 1;
}
 
function passed() {
    good = good + 1;
    total = total + 1;
    console.log("Test passed!\n");
}