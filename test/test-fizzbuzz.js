var vows = require('vows'),
    assert = require('assert');

// Create a Test Suite
vows.describe('Números divisíveis por 3 deve aparecer como Fizz ao invés do número').addBatch({
    'quando dividir o número por 3': {
        modulo: function() { return 3 / 3 },

        'o módulo deve ser 0': function (modulo) {
            assert.equal (modulo, 0);
        }
    }
}).run();