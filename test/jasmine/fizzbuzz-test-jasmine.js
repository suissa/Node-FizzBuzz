var jasmine  = require( 'jasmine-node' ),
	fizzbuzz = require( '../../lib/fizzbuzz-module.js' );

describe( 'FizzBizz module', function () {
    it( 'should be Fizz for divisibles of 3', function () {
        expect( fizzbuzz.isFizz( 6 ) ).toBe( 1 );
    });
    
    it( 'should be Buzz for divisibles of 5', function () {
        expect( fizzbuzz.isBuzz( 10 ) ).toBe( 1 );
    });
    
    it( 'should be FizzBuzz for divisibles of 3 and 5', function () {
        expect( fizzbuzz.isFizzBuzz( 15 ) ).toBe( true );
    });
});

jasmine.executeSpecsInFolder( './' );