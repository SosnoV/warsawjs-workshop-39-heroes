import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './Hero';

@Injectable({
	providedIn: 'root',
})
export class ObservableHeroesAdapter {

	convertHeroes(heroes: Hero[]): Observable<Hero[]> {
		return of(heroes);
	}
}
