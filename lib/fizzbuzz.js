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
	return !(n % 3);
}
FizzBuzz.isBuzz = function(n){
	return !(n % 5);
}
FizzBuzz.isFizzBuzz = function(n){
	return !(n % 3) && !(n % 5);
}

//console.log(FizzBuzz.isFizz(3));
//fb(100);


