const numbers = [3, 6, 8, 4, 78, 8, 4, 4, 78, 8, 4, 4, 3, 3];

const sum = numbers.reduce((acc, x) => {
	acc += x;
	return acc;
}, 0);

let count = 0;
const totals = numbers.reduce((acc, x) => {
	const name = `entry${String("00000" + count).slice(-5)}`;
	count++;
	acc = { 
		...acc,
		[name]: x
	 };
	return acc;
}, {});

console.log(sum);
console.log(totals);