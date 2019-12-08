import { Hero } from './Hero';

export class HeroBuilder {

	private static DEFAULT_NAME: string = 'Brave Hero';

	static builder(heroId: number): HeroBuilder {
		return new HeroBuilder(heroId);
	}

	private heroId: number;
	private heroName: string = HeroBuilder.DEFAULT_NAME;

	private constructor(heroId: number) {
		this.heroId = heroId;
	}

	withName(heroName: string): HeroBuilder {
		this.heroName = heroName;
		return this;
	}

	build(): Hero {
		return new Hero(this.heroId, this.heroName);
	}
}
