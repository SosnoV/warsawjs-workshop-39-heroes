import { Injectable } from '@angular/core';
import { Superpower } from './Superpower';

@Injectable({
	providedIn: 'root',
})
export class SuperpowerProvider {

	private cachedSuperpowers: { [name: string]: Superpower } = {};

	private static ICON: string = 'fa fa-pencil';

	get(superpowerName: string) {
		let cachedSuperpower: Superpower = this.cachedSuperpowers[superpowerName];
		if (cachedSuperpower == null) {
			this.cachedSuperpowers[superpowerName] = new Superpower(superpowerName, SuperpowerProvider.ICON);
			cachedSuperpower = this.cachedSuperpowers[superpowerName];
		}
		return cachedSuperpower;
	}
}
