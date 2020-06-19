const printCalc = callback => {
	console.log(callback);
}

const sayHello = name => 'Hello, ' + name;

printCalc(sayHello('Aristotle'));