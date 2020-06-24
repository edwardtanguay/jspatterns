// npm i moment
const moment = require('moment');

let loggerInstance = null;

class Logger {
	constructor() {
		this.count = 1;
		if (!loggerInstance) {
			loggerInstance = this;
		} else {
			return loggerInstance;
		}
	}

	log(message) {
		const d = moment(new Date());
		console.log(`${d.format('YYYY-MM-DD HH:mm:ss')}: ${message} (Log Message #${String(this.count).padStart(5, '0')})`);
		this.count++;
	}
}

const logger1 = new Logger();
logger1.log("printed report");
logger1.log("saved file");

const logger2 = new Logger();
logger2.log("transferred data");