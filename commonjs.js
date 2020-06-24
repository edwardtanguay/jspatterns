const calc = require('./calc2');

for (let x = 0; x <= 10; x++) {
	console.log(calc.add(x, x));
	console.log(calc.multiply(x, x));
}