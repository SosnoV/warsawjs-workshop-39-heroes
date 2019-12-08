import { Injectable } from '@angular/core';
import { CrimeFighter } from './CrimeFighter';
import { HeroBuilder } from './HeroBuilder';
import { SuperHeroBuilder } from './SuperHeroBuilder';

@Injectable({
	providedIn: 'root',
})
export class CrimeFightersFactoryLab {

	public createHeroWithId(id: number, name: string): CrimeFighter {
		return HeroBuilder.builder(id) //stworzyliśmy obiekt HeroBuilder
			.withName(name) // ustawiamy w builderze property name
			.build();  // tworzymy obiekt Hero
	}

	public createHero(name: string): CrimeFighter {
		const id: number = -1; // TODO pobierać Id

		return HeroBuilder.builder(id) //stworzyliśmy obiekt HeroBuilder
			.withName(name) // ustawiamy w builderze property name
			.build();  // tworzymy obiekt Hero
	}

	public createSuperhero(name: string, superpower: string): CrimeFighter {
		const id: number = -1; // TODO pobierać Id

		return SuperHeroBuilder.builder(id, name) //stworzyliśmy obiekt HeroBuilder
			.withSuperpower(superpower) // ustawiamy w builderze property superpower
			.build();  // tworzymy obiekt Hero
	}
}
