let carInstance = null;

class Car {
	constructor(doors, engine, color) {
		if (!carInstance) {
			this.doors = doors;
			this.engine = engine;
			this.color = color;
			carInstance = this;
		} else {
			return carInstance;
		}
	}
}

class SUV extends Car {
	constructor(doors, engine, color) {
		super(doors, engine, color);
		this.wheels = 4;
	}
}

const civic = new Car(4, 'V6', 'red');
const cx5 = new SUV(4, "V8", 'blue');