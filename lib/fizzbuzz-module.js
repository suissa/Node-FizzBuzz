module.exports = {
	isFizz: function(n){
		return !(n % 3) && ( (n % 5) > 0);
	}
	,isBuzz: function(n){
		return !(n % 5) && ( (n % 3) > 0);
	}
	,isFizzBuzz: function(n){
		return (!(n % 3) && !(n % 5));
	}
}