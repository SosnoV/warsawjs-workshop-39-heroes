import { Injectable } from '@angular/core';
import { Superpower } from './Superpower';

@Injectable({
	providedIn: 'root',
})
export class SuperpowerProvider {

	private cachedSuperpowers: { [key: string]: Superpower } = {};

	private static ICON: string = 'fa fa-pencil';

	get(superpowerName: string) {
		let cachedSuperpower: Superpower = this.cachedSuperpowers[superpowerName];
		if (cachedSuperpower == null) {

		}
		return cachedSuperpower;
	}
}
