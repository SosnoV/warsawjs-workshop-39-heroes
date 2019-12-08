import { Injectable } from '@angular/core';
import { CrimeFighter } from './CrimeFighter';
import { HeroBuilder } from './HeroBuilder';
import { SuperHeroBuilder } from './SuperHeroBuilder';
import { Superpower } from './Superpower';
import { SuperpowerProvider } from './SuperpowerProvider';

@Injectable({
	providedIn: 'root',
})
export class CrimeFightersFactory {


	constructor(private superpowerProvider: SuperpowerProvider) {
	}

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

	public createSuperhero(name: string, superpowerName: string): CrimeFighter {
		const id: number = -1; // TODO pobierać Id
		let superpower: Superpower = this.superpowerProvider.get(superpowerName);
		return SuperHeroBuilder.builder(id, name) //stworzyliśmy obiekt HeroBuilder
			.withSuperpower(superpower) // ustawiamy w builderze property superpower
			.build();  // tworzymy obiekt Hero
	}
}
