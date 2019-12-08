import { CrimeFighter } from './CrimeFighter';
import { Superpower } from './Superpower';

export class Superhero extends CrimeFighter {

	// add more
	private id: number;
	private name: string;
	private superpower: Superpower;

	constructor(id: number, name: string, superpower: Superpower) {
		super();
		this.id = id;
		this.name = name;
		this.superpower = superpower;
	}

	fightCrime(): void {
		console.log('Used ' + this.superpower);
	}
}
