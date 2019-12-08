import { CrimeFighter } from './CrimeFighter';

export class Hero extends CrimeFighter {

	// add more
	private id: number;
	private name: string;

	constructor(id: number, name: string) {
		super();
		this.id = id;
		this.name = name;
	}

	fightCrime(): void {
		console.log('Pow pow pow');
	}
}
