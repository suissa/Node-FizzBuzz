var fizzbuzz = require( '../../lib/fizzbuzz-module.js' );

describe( 'FizzBizz module', function () {
    it( 'should return Fizz for divisibles of 3', function () {
        expect( fizzbuzz.isFizz( 6 ) ).toBe( true );
    });
    
    it( 'should return Buzz for divisibles of 5', function () {
        expect( fizzbuzz.isBuzz( 10 ) ).toBe( true );
    });
    
    it( 'should return FizzBuzz for divisibles of 3 and 5', function () {
        expect( fizzbuzz.isFizzBuzz( 15 ) ).toBe( true );
    });
});