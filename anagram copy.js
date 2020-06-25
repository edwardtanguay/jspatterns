const englishWords = require('an-array-of-english-words');
const germanWords = require('an-array-of-german-words');
const frenchWords = require('an-array-of-french-words');

const randomEnglishWordIndex = Math.floor(Math.random() * englishWords.length);
const randomGermanWordIndex = Math.floor(Math.random() * germanWords.length);
const randomFrenchWordIndex = Math.floor(Math.random() * frenchWords.length);

console.log(`Random English word ${randomEnglishWordIndex} of ${englishWords.length} is: "${englishWords[randomEnglishWordIndex]}"`);
console.log(`Random German word ${randomGermanWordIndex} of ${germanWords.length} is: "${germanWords[randomGermanWordIndex]}"`);
console.log(`Random French word ${randomFrenchWordIndex} of ${frenchWords.length} is: "${frenchWords[randomFrenchWordIndex]}"`);

console.log(englishWords.filter(x => x.startsWith('b') && x.endsWith('tion')));
console.log(englishWords.filter(x => x.includes('kar')));
console.log(germanWords.filter(x => x.includes('schlum')));
