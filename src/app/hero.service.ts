import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';

@Injectable({ providedIn: 'root' })
export class HeroService {


	constructor() {
	}

	/** GET heroes from the server */
	getHeroes(): Observable<Hero[]> {
		return null;
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

