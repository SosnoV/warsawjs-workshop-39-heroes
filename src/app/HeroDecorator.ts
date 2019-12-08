import { CrimeFighter } from './CrimeFighter';
import { Hero } from './Hero';

export class HeroDecorator extends CrimeFighter {

	private hero: Hero;

	constructor(hero: Hero) {
		super();
		this.hero = hero;
	}

	fightCrime(): void {
		this.hero.fightCrime();
		console.log('Wyślij sms że walczę ze złem');
	}
}
