export class Superpower {

	private _name: string;
	private _icon: string;

	constructor(name: string, icon: string) {
		this._name = name;
		this._icon = icon;
	}

	set name(value: string) {
		throw Error('this object is immutable');
	}

	set icon(value: string) {
		throw Error();
	}
}
