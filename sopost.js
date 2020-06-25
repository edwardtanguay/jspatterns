// https://stackoverflow.com/questions/62574150/why-are-the-role-of-the-parentheses-in-this-reduce-syntax-which-creates-a-jav

const languages = ['french', 'french', 'spanish', 'polish', 'spanish', 'german', 'spanish', 'polish', 'spanish', 'spanish', 'french', 'spanish', 'spanish', 'french', 'spanish', 'spanish', 'french', 'french', 'french', 'french', 'french', 'polish', 'spanish', 'german', 'spanish', 'polish', 'spanish', 'spanish', 'french', 'spanish', 'english', 'french', 'spanish', 'spanish', 'french', 'german', 'french', 'french', 'french', 'polish', 'spanish', 'german', 'spanish', 'polish', 'spanish', 'spanish', 'french', 'german', 'spanish', 'french', 'english', 'spanish', 'french', 'french', 'french', 'french', 'french', 'polish', 'spanish', 'german', 'spanish', 'polish', 'spanish', 'spanish', 'french', 'spanish', 'spanish', 'german', 'spanish', 'spanish', 'french', 'french', 'french', 'french', 'french', 'polish', 'spanish', 'german', 'spanish', 'polish', 'spanish', 'spanish', 'french', 'german', 'spanish', 'french', 'spanish', 'spanish', 'french', 'french', 'french', 'french', 'french', 'french'];

// 1. iterating while adding a sum
const sum = languages.reduce((acc, language) => {
	acc++;
	return acc;
}, 0);
// const sum = languages.reduce((acc, language) => ++acc, 0);
console.log(`There are ${sum} entries.`);

// 2. iterating while building an array
const initials = languages.reduce((acc, language) => {
	acc.push(language.substring(0, 1));
	return acc;
}, []);
console.log(initials);

// 3.1 iterating while building a JavaScript object
const totals = languages.reduce((acc, language) => ({
	...acc,
	[language]: acc[language] ? acc[language] + 1 : 1
}), {});
console.log(totals);

// 3.2 iterating while building a JavaScript object
const totals2 = languages.reduce((acc, language) => {
	return {
		...acc,
		[language]: acc[language] ? acc[language] + 1 : 1
	}
}, {});
console.log(totals2);




