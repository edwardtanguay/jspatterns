// npm i esm
// node -r esm server.js
import { add, multiply as times} from './calc';

for (let x = 0; x <= 10; x++) {
	console.log(add(x, x));
	console.log(times(x, x));
}