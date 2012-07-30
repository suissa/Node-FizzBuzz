var vows        = require('vows')
    ,assert     = require('assert')
    ,fizzbuzz   = require('../../lib/fizzbuzz-module.js');


vows.describe('Fizz Buzz Suite').addBatch({
    'Fizz test with 3': {
        topic: function () { return fizzbuzz.isFizz( 3 ) },

        'isFizz': function ( topic ) {
            assert.equal( topic, 1 );
        }
    }
    ,'Fizz test with 6': {
        topic: function () { return fizzbuzz.isFizz( 6 ) },

        'isFizz': function ( topic ) {
            assert.equal( topic, 1 );
        }
    }
    ,'Buzz test with 5': {
        topic: function () { return fizzbuzz.isBuzz( 5 ) },

        'isBuzz': function ( topic ) {
            assert.equal( topic, true );     
        }
    }
    ,'Buzz test with 10': {
        topic: function () { return fizzbuzz.isBuzz( 10 ) },

        'isBuzz': function ( topic ) {
            assert.equal( topic, true );     
        }
    }
    ,'FizzBuzz test with 15': {
        topic: function () { return fizzbuzz.isFizzBuzz( 15 ) },

        'isFizzBuzz': function ( topic ) {
            assert.equal( topic, true );    
        }
    }
    ,'FizzBuzz test with 20': {
        topic: function () { return fizzbuzz.isFizzBuzz( 20 ) },

        'isFizzBuzz': function ( topic ) {
            assert.equal( topic, false );    
        }
    }
}).run();