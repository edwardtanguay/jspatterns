const moment = require('moment');

class Book {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}
	display() {
		return `The book "${this.title}" was written by ${this.author}.`;
	}
}

class CapitalCity {
	constructor(name, country) {
		this.name = name;
		this.country = country;
	}
	display() {
		return `The capital of ${this.country} is ${this.name}.`;
	}
}

const items = [
	new Book('Hillbilly Elegy', 'J.D. Vance'),
	new Book('Homo Deus', 'Yuval Harari'),
	new Book('On Liberty', 'John Stuart Mill'),
	new CapitalCity('Caracas', 'Venezuela'),
	new CapitalCity('Belmopan', 'Belize'),
]
items.forEach(x => console.log(x.display()));

const loggingMixin = {
	displayLogEntry() {
		const d = moment(new Date());
		return `${d.format('YYYY-MM-DD HH:mm:ss')}: Printed: [${this.display()}]`;
	}
}
Object.assign(Book.prototype, loggingMixin);
Object.assign(CapitalCity.prototype, loggingMixin);
items.forEach(x => console.log(x.displayLogEntry()));

