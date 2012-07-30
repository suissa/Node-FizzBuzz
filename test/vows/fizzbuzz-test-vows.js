var vows        = require('vows')
    ,assert     = require('assert')
    ,fizzbuzz   = require('../../lib/fizzbuzz-module.js');


vows.describe('Fizz Buzz Suite').addBatch({
    'Fizz test': {
        topic: function () { return fizzbuzz.isFizz( 6 ) },

        'isFizz': function ( topic ) {
            assert.equal( topic, 1 );
        }
    }
    ,'Buzz test': {
        topic: function () { return fizzbuzz.isBuzz( 10 ) },

        'isBuzz': function ( topic ) {
            assert.equal( topic, true );     
        }
    }
    ,'FizzBuzz test': {
        topic: function () { return fizzbuzz.isFizzBuzz( 15 ) },

        'isFizzBuzz': function ( topic ) {
            assert.equal( topic, true );    
        }
    }
    // ,'FizzBuzz sequence test': {
    //     topic: function () { return fizzbuzz.answareMe( 1, 6 ) },

    //     'answare Me who\'s who': function ( topic ) {
    //         assert.equal(
    //             JSON.stringify( topic ), 
    //             JSON.stringify( [1, 2, 'Fizz', 4, 'Buzz', 'Fizz'] ) 
    //         )    
    //     }
    // }
}).run();