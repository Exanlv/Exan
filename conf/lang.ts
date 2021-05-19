import { TranslationObject } from "../src/classes/Translator";
import { EN } from "../lang/en";
import { NL } from "../lang/nl";
import { SP } from "../lang/sp";
import { HU } from "../lang/hu";
import { CS } from "../lang/cs";

export const DEFAULT_LANGUAGE = 'en';

export const LANGUAGES: Array<{lang_code: string, lang: TranslationObject, name: string}> = [
	{
		lang_code: 'en',
		name: 'English',
		lang: EN
	},
	{
		lang_code: 'nl',
		name: 'Nederlands',
		lang: NL
	},
	{
		lang_code: 'sp',
		name: 'Español',
		lang: SP
	},
    {
        lang_code: 'hu',
        name: 'Magyar',
        lang: HU
    },
    {
        lang_code: 'cs',
        name: 'Čeština',
        lang: CS
    }
];
