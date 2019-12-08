import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { InMemoryDbService } from './InMemoryDbService';

@Injectable({
	providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

	private heroes: Hero[];

	constructor() {
		this.createDb();
		//4-5 metod
	}

	createDb(): void {
		this.heroes = [
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
	}

	genId(heroes: Hero[]): number {
		return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
	}

	getHeroes() {
		return this.heroes;
	}
}
