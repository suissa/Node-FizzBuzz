var chai     = require( 'chai' ),
    assert   = chai.assert,
    expect   = chai.expect,
    should   = chai.should(),
    fizzbuzz = require( '../../lib/fizzbuzz-module' );

// assert
assert.equal( fizzbuzz.isFizz( 3 ), 1, '3 is Fizz' );
assert.equal( fizzbuzz.isBuzz( 5 ), 1, '5 is Buzz' );
assert.equal( fizzbuzz.isFizzBuzz( 15 ), true, '15 is FizzBuzz' );


// expect
expect( fizzbuzz.isFizz( 3 ) ).to.be.equal( 1 );
expect( fizzbuzz.isBuzz( 5 ) ).to.be.equal( 1 );
expect( fizzbuzz.isFizzBuzz( 15 ) ).to.be.equal( true );


// should
fizzbuzz.isFizz( 3 ).should.equal( 1 );
fizzbuzz.isBuzz( 5 ).should.equal( 1 );
fizzbuzz.isFizzBuzz( 15 ).should.equal( true );