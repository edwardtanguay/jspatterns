const flashcardsCompleted = ['french', 'french', 'spanish', 'polish', 'spanish', 'german', 'spanish', 'polish', 'spanish', 'spanish', 'french', 'spanish', 'spanish', 'french', 'spanish', 'spanish', 'french', 'french', 'french', 'french', 'french', 'polish', 'spanish', 'german', 'spanish', 'polish', 'spanish', 'spanish', 'french', 'spanish', 'english', 'french', 'spanish', 'spanish', 'french', 'german', 'french', 'french', 'french', 'polish', 'spanish', 'german', 'spanish', 'polish', 'spanish', 'spanish', 'french', 'german', 'spanish', 'french', 'english', 'spanish', 'french', 'french', 'french', 'french', 'french', 'polish', 'spanish', 'german', 'spanish', 'polish', 'spanish', 'spanish', 'french', 'spanish', 'spanish', 'german', 'spanish', 'spanish', 'french', 'french', 'french', 'french', 'french', 'polish', 'spanish', 'german', 'spanish', 'polish', 'spanish', 'spanish', 'french', 'german', 'spanish', 'french', 'spanish', 'spanish', 'french', 'french', 'french', 'french', 'french', 'french'];

// iterating while adding a sum
const sum = flashcardsCompleted.reduce((acc, language) => {
	acc++;
	return acc;
}, 0);
console.log(`There are ${sum} entries.`);

// iterating while building an array
const initials = flashcardsCompleted.reduce((acc, language) => {
	acc.push(language.substring(0, 1));
	return acc;
}, []);
console.log(initials);

// iterating while building a JavaScript object
const processTotals = f => {
	return f.reduce((acc, language) => ({
		...acc,
		[language]: acc[language] ? acc[language] + 1 : 1
	}), {});
};

console.log(processTotals(flashcardsCompleted));




