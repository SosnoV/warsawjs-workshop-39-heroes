import { Superhero } from './Superhero';

export class SuperHeroBuilder {

	private heroSuperpower: string;

	constructor(private heroId: number, private heroName: string) {

	}

	static builder(heroId: number, heroName: string): SuperHeroBuilder {
		return new SuperHeroBuilder(heroId, heroName);
	}

	withSuperpower(heroSuperpower: string): SuperHeroBuilder {
		this.heroSuperpower = heroSuperpower;
		return this;
	}

	build(): Superhero {
		return new Superhero(this.heroId, this.heroName, this.heroSuperpower);
	}
}
