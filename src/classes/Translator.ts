import { DEFAULT_LANGUAGE } from "../../conf/lang";

export class Translator {
	public translations: {[lang: string]: {[key: string]: string}} = {};
	public default: string = DEFAULT_LANGUAGE;

	public add_translation(lang: string, key: string, value: string) {
		if (!this.translations[lang])
			this.translations[lang] = {};
		
		this.translations[lang][key] = value;
	}

	public trans(lang: string, key: string, data?: {[key: string]: string}): string {
		let string = this.translations[lang][key] || this.translations[this.default][key] || key;
		
		if (!data)
			return string;

		for (let i in data) {
			string = string.replace(new RegExp(`:${i}`, 'g'), `${data[i]}`);
		}

		return string;
	}

	public import_object(lang: string, obj: TranslationObject, dry: boolean = false): {[key: string]: string} {
		const data = {};
		
		for (let i in obj) {
			if (typeof obj[i] === 'object') {
				const sub_data = this.import_object(lang, (obj[i] as TranslationObject), true);
				
				for (let j in sub_data) {
					data[i + '.' + j] = sub_data[j];
				}
			} else {
				data[i] = obj[i];
			}
		}

		if (!dry) {
			for (let i in data) {
				this.add_translation(lang, i, data[i]);
			}
		}

		return data;
	}
}

export class TranslationObject {
	[key: string]: TranslationObject|string;
}