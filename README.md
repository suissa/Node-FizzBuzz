FizzBuzz with BDD
---------------

Neste problema, você deverá exibir uma lista de 1 a 100, um em cada linha, com as seguintes exceções:

	- Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
	- Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
	- Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés do número'.


link: [FizzBuzz Dojo Puzzle](http://dojopuzzles.com/problemas/exibe/fizzbuzz/ "FizzBuzz Dojo Puzzle")


This experiment is for study purposes. Lets test with several suite tests with node.js


##Suite Test:
	- Assert [Node.js Assert](http://nodejs.org/docs/v0.3.1/api/assert.html "Node.js Assert")
	- NodeUnit [NodeUnit](http://nodejs.org/docs/v0.3.1/api/assert.html "NodeUnit")
	- Mocha [Vows BDD](https://github.com/visionmedia/mocha "Mocha BDD")
	- Vows [Vows BDD](http://vowsjs.org/ "Vows BDD")
    - Jasmine [Jasmine BDD](https://github.com/pivotal/jasmine/wiki "Jasmine BDD")
    - Chai [Chai BDD/TDD](http://chaijs.com/ "Chai BDD/TDD")


##Dependencies:
	- nodeunit
	- mocha
	- vows
	- jasmine-node
    - chai


###Assert test
- node test/assert/fizzbuzz-test-assert.js

###NodeUnit test
- sudo npm install -g nodeunit
- nodeunit test/nodeunit/fizzbuzz-test-nodeunit.js 

###Mocha test
- sudo npm install -g mocha
- mocha -R spec test/mocha/fizzbuzz-test-mocha.js 

###Vows test
- sudo npm install -g vows
- node test/vows/fizzbuzz-test-vows.js

###Jasmine test
- sudo npm install -g jasmine-node
- node test/jasmine/fizzbuzz-test-jasmine.js

###Chai test
- sudo npm install chai
- node test/chai/fizzbuzz-test-chai.js