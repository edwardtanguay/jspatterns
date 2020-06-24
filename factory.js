class Building {
	constructor(name = '(unknown)') {
		this.name = name;
	}
	display() { }
}

class BuildingFactory {
	create(type, options = {}) {
		switch (type) {
			case 'house':
				const house = new House();
				house.name = options.name ? options.name : house.name;
				house.neighborhood = options.neighborhood ? options.neighborhood : house.neighborhood;
				house.numberOfGarages = options.numberOfGarages ? options.numberOfGarages : house.numberOfGarages;
				return house;
			case 'school':
				const school = new School();
				school.name = options.name ? options.name : school.name;
				school.district = options.district ? options.district : school.district;
				school.numberOfSportsFields = options.numberOfSportsFields ? options.numberOfSportsFields : school.numberOfSportsFields;
				return school;
			default:
				return null;
		}
	}
}

class House extends Building {
	constructor(name, neighborhood, numberOfGarages) {
		super(name);
		this.neighborhood = '';
		this.numberOfGarages = 0;
	}
	display() {
		return `The house "${this.name}" is in the neighborhood "${this.neighborhood}" and has ${this.numberOfGarages} garages.`;
	}
}

class School extends Building {
	constructor(name, district, numberOfSportsFields) {
		super(name);
		this.district = '';
		this.numberOfSportsFields = 0;
	}
	display() {
		return `The school "${this.name}" is in district "${this.neighborhood}" and has ${this.numberOfSportsFields} sports fields.`;
	}
}

const buildingFactory = new BuildingFactory();
const buildings = [
	buildingFactory.create('house', { name: 'Family Smith', neighborhood: 'East Side', numberOfGarages: 1 }),
	buildingFactory.create('house', { name: 'Family Ackerson', neighborhood: 'West Side', numberOfGarages: 2 }),
	buildingFactory.create('school', { name: 'Goethe Gymnasium', district: '23', numberOfSportsFields: 2 }),
	buildingFactory.create('school', { name: 'Schiller Gymnasium', district: '25', numberOfSportsFields: 3 })
]
buildings.forEach(x => console.log(x.display()));
