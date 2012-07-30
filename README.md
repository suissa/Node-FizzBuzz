#FizzBuzz with BDD

-Neste problema, você deverá exibir uma lista de 1 a 100, um em cada linha, com as seguintes exceções:
	*Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
	*Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
	*Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés do número'.

[FizzBuzz Dojo Puzzle](http://dojopuzzles.com/problemas/exibe/fizzbuzz/ "FizzBuzz Dojo Puzzle")

-Suite Test:
	*Assert [Node.js Assert](http://nodejs.org/docs/v0.3.1/api/assert.html "Node.js Assert")
	*NodeUnit [NodeUnit](http://nodejs.org/docs/v0.3.1/api/assert.html "NodeUnit")
	*Mocha [Vows BDD](https://github.com/visionmedia/mocha "Mocha")
	*Vows [Vows BDD](http://vowsjs.org/ "Node.js Assert")


-Dependencies:
	*nodeunit
	*mocha
	*vowsrrrrrrrrrrrrrrrrrrrrrr

###Assert test
node test/assert/fizzbuzz-test-assert.js

###NodeUnit test
sudo npm install -g nodeunit
nodeunit test/nodeunit/fizzbuzz-test-nodeunit.js 

###Mocha test
sudo npm install -g mocha
mocha -R spec test/mocha/fizzbuzz-test-mocha.js 

###Vows test
sudo npm install -g vows
node test/vows/fizzbuzz-test-vows.js
