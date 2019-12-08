import { Injectable } from '@angular/core';
import { CrimeFightersFactory } from './crime-fighters-factory-lab.service';
import { CrimeFighter } from './CrimeFighter';
import { CrimeFighterQueryStorage } from './CrimeFighterQueryStorage';
import { Hero } from './Hero';

@Injectable()
export class InMemoryCrimeFightersStorage implements CrimeFighterQueryStorage {

	private static INITIAL_DATA = [
		{ id: 11, name: 'Dr Nice' },
		{ id: 12, name: 'Narco' },
		{ id: 13, name: 'Bombasto' },
		{ id: 14, name: 'Celeritas' },
		{ id: 15, name: 'Magneta' },
		{ id: 16, name: 'RubberMan' },
		{ id: 17, name: 'Dynama' },
		{ id: 18, name: 'Dr IQ' },
		{ id: 19, name: 'Magma' },
		{ id: 20, name: 'Tornado' }
	];

	private crimeFighters: CrimeFighter[];

	constructor(private factory: CrimeFightersFactory) {
		this.createDb();
	}

	createDb(): void {
		this.crimeFighters = InMemoryCrimeFightersStorage.INITIAL_DATA
			.map(value => this.factory.createHeroWithId(value.id, value.name));
	}

	genId(heroes: Hero[]): number {
		// return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
		return 0;
	}

	getCrimeFighters(): CrimeFighter[] {
		return this.crimeFighters;
	}
}
