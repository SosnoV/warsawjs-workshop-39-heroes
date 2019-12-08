import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CrimeFighter } from './CrimeFighter';

import { Hero } from './Hero';
import { InMemoryDataService } from './in-memory-data.service';
import { ObservableHeroesAdapter } from './ObservableHeroesAdapter';

@Injectable({ providedIn: 'root' })
export class HeroService {

	constructor(private inMemoryDataService: InMemoryDataService,
				private adapter: ObservableHeroesAdapter) {
	}

	/** GET heroes from the server */
	getHeroes(): Observable<Hero[]> {
		const crimeFighters: CrimeFighter[] = this.inMemoryDataService.getCrimeFighters();
		return this.adapter.convertHeroes(crimeFighters);
	}

	getHero(id: number): Observable<Hero> {

		return null;
	}

	searchHeroes(term: string): Observable<Hero[]> {
		if (!term.trim()) {
			// if not search term, return empty hero array.
			return of([]);
		}
		return null;
	}

	addHero(hero: Hero): Observable<Hero> {
		return null;
	}

	deleteHero(hero: Hero | number): Observable<Hero> {
		return null;
	}

	updateHero(hero: Hero): Observable<Hero> {
		return null;
	}
}

