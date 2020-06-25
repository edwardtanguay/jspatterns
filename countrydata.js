// npm i express
// npm i world-countries-capitals
const express = require('express');
const wcc = require('world-countries-capitals');
const countries = wcc.getAllCountryDetails();

const app = express();
const port = 3000;

String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1)
}
String.prototype.capitalizeAllWords = function () {
	return this.split(' ').map(x => x.capitalize()).join(' ');
}
//console.log(countries[4]);

const getHtml = () => {
	return countries.reduce((acc, x) => {
		acc += `<p>${x.country.capitalizeAllWords()} - ${x.capital.capitalizeAllWords()} </p>`;
		return acc;
	}, '');
};

app.get('/', (req, res) => {
	res.send(getHtml());
});

app.listen(port, () => {
	console.log(`Express app is now listening at: http://localhost:${port}`);
});