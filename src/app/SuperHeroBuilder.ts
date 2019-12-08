import { Superhero } from './Superhero';
import { Superpower } from './Superpower';

export class SuperHeroBuilder {

	private heroSuperpower: Superpower;

	constructor(private heroId: number, private heroName: string) {

	}

	static builder(heroId: number, heroName: string): SuperHeroBuilder {
		return new SuperHeroBuilder(heroId, heroName);
	}

	withSuperpower(heroSuperpower: Superpower): SuperHeroBuilder {
		this.heroSuperpower = heroSuperpower;
		return this;
	}

	build(): Superhero {
		return new Superhero(this.heroId, this.heroName, this.heroSuperpower);
	}
}
