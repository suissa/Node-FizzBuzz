var fizzBuzz = require('./lib/fizzbuzz-module.js');

for(var i = 1; i<=100; i++){
	if(fizzBuzz.isFizz(i)){
		console.log("Fizz");
	}
	else if(fizzBuzz.isBuzz(i)){
		console.log("Buzz");
	}
	else if(fizzBuzz.isFizzBuzz(i)){
		console.log("FizzBuzz");
	}
	else {
		console.log(i);
	}
}