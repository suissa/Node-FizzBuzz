exports.FizzBuzz = (function () {  

	var FizzBuzz = Object.create( null );

	//creating prototype
	Object.defineProperties(FizzBuzz, {
		"isFizz": {
			value: false,
			writable: true
		}
		,"isBuzz": {
			value: false,
			writable: true
		}
		,"isFizzBuzz": {
			value: false,
			writable: true
		}
	});

	//creating implementation
	FizzBuzz.isFizz = function(n){
		return !(n % 3) && (n % 5);
	}
	FizzBuzz.isBuzz = function(n){
		return !(n % 5) && (n % 3);
	}
	FizzBuzz.isFizzBuzz = function(n){
		return (!(n % 3) && !(n % 5));
	}
	FizzBuzz.run = function(){

		for(var i = 1; i<=15; i++){
			if(FizzBuzz.isFizz(i)){
				console.log("Fizz");
			}
			else if(FizzBuzz.isBuzz(i)){
				console.log("Buzz");
			}
			else if(FizzBuzz.isFizzBuzz(i)){
				console.log("FizzBuzz");
			}
			else {
				console.log(i);
			}
		}
	}

    return FizzBuzz;
} ());

