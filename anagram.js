const englishWords = require('an-array-of-english-words');

const countOccurances = arr =>
	arr.reduce((acc, str) => ({
		...acc,
		[str]: acc[str] ? acc[str] + 1 : 1
	}), {});

const hasSameLetterCount = (word1, word2) => {
	const word1Count = countOccurances(word1.split(''));
	const word2Count = countOccurances(word2.split(''));
	return Object.keys(word1Count).length == Object.keys(word2Count).length &&
		Object.keys(word1Count).every(letter => word1Count[letter] === word2Count[letter]);
};

const findAnagrams = (word, words) => {
	return `The word "${word}" has these anagrams: ` + (words
	.filter(entry => hasSameLetterCount(word, entry))
	.filter(x => x !== word)).join(', ');
};

console.log(findAnagrams("cinema", englishWords));
console.log(findAnagrams("tar", englishWords));
console.log(findAnagrams("live", englishWords));