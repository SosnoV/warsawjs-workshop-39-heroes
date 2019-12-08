import { CrimeFighter } from './CrimeFighter';

export class Superhero extends CrimeFighter {

	// add more
	private id: number;
	private name: string;
	private superpower: string;

	constructor(id: number, name: string, superpower: string) {
		super();
		this.id = id;
		this.name = name;
		this.superpower = superpower;
	}
}
