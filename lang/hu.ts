import { TranslationObject } from "../src/classes/Translator";

export const HU: TranslationObject = {
	commands: {
		base: {
			no_additional_help: 'További segítség nem elérhető',
		},
		help: {
			descriptions: {
				help: 'Megmutatja ezt a menüt',
				prefix: 'Megmutatja a szerver prefixumát',
				set_prefix: 'Beállítja a prefixumot ennél a szervernél',
				dev: 'Megmutatja a dev mód listát ennél a szervernél',
				toggle_dev: 'Ki és be kapcsolása a dev módot ennél a szervernél',
				eval: 'Végrehajt egy kódot',
				self_assign: 'Kezeld a sajátos-rang-beállítást ennél a szervernél',
				self_assign_roles: 'Kezeld a sajátosan beállítható rangokat',
				self_assign_roles_add: 'Hozzáad egy sajátosan beállítható rangot',
				self_assign_roles_remove: 'Eltöröl egy sajátosan beállítható rangot',
				self_assign_roles_swap: 'Megcseréli a rangok helyét a rang listában', 
				self_assign_categories: 'Kezeld a sajátosan beállítható rangok kategóriáit',
				self_assign_categories_add: 'Hozzáad egy rang kategóriát',
				self_assign_categories_list: 'Megmutatja a rang kategóriákat',
				self_assign_categories_roles: 'Kezeld a rangokat egy kategórián belül',
				self_assign_categories_roles_add: 'Hozzáad egy rangot egy kategóriához',
				self_assign_categories_roles_remove: 'Eltöröl egy rangot egy kategóriából',
				self_assign_react: 'Kezeld a reakció rangokat',
				self_assign_react_add: 'Hozzád egy reakció rangot',
				self_assign_react_remove: 'Ad egy útmutatót arra, hogy hogyan kell reakció rangokat eltávolítani',
				self_assign_react_list: 'Megmutatja a reakció rangokat',
				get_role: 'Hozzád ad egy rangot',
				remove_role: 'Eltöröl egy rangot',
				list_roles: 'Megmutatja az elérhető rangokat',
				language: 'Megmutatja az elérhető nyelveket',
				language_set: 'Beállítja az általad kedvelt nyelvet',
				language_guild: 'Megmutatja az elérhető nyelveket',
				language_guild_set: 'Beállít egy alapértelmezett nyelvet a szerveren',
				invite: 'Ad egy meghívólinket ehhez a bothoz',
				contribute: 'Tudj meg többet, hogy hogyan tudsz segíteni a bot továbbfejlesztésében',
				my_data: 'Megmutatja hogy a bot milyen információkat tárol rólad',
				my_data_remove: 'Eltörli az összes személyes adatot rólad',
				self_assign_categories_swap: '2 kategória pozícióját megcseréli',
				privacy: 'Megmutatja az adatvédelmi irányelveket',
			},
			sub_commands: 'Alparancsok:',
			commands_for: 'Elérhető parancsok :username: számára',
			description: 'Lent megtalálhatóak a számodra elérhető parancsok. Ha szeretnél több információt egy parancsról, használd a `--help` a végén. Ha szeretnél egy rövid leírást egy kategória alparancsairól, használd a `:command %category%` parancsot a kategóriával amelyről többet szeretnél megtudni',
			not_a_category: 'A `:category` nem egy kategória, probáld meg használni a `:command` parancsot semmi más nélkül, hogy megtudd a kategóriákat',
		},
		error: {
			internal_error: 'Belső hiba történt',
			internal_error_with_error: 'Belső hiba `:error`'
		},
		missing_permissions: {
			missing_permissions: 'Nincs szerverjogosultságog ehhez a parancshoz!',
		},
		unknown_command: {
			unknown_command_use_help: 'Ismeretlen parancs! Használd a :help_command a parancslistához!'
		},
		prefix: {
			current_prefix: 'A jelenlegi szerverprefixum az `:prefix`',
		},
		set_prefix: {
			prefix_too_long: 'Ez a prefixum túl hosszú, kérek válassz egy olyat amely kivesebb mint :limit karakter',
			no_prefix: 'Ragd a kívánt prefixumot kapcsos zárójelek közé, [mint ez], további információért használd a \`:command\` parancsot',
			prefix_set: 'Prefixum beállítva!',
			help_example: 'Ezzel a parancsal beállíthatod a jelenlegi szerveren használt prefixumot. Add meg a kívánt prefixumot kapcsos zárójelek között.\`Például: \`:command [--]\`-el az új prefixum \`--\` lenne',
			help_show_prefix: 'Ezzel a parancsal beállíthatod a jelenlegi szerveren használt prefixumot. Add meg a kívánt prefixumot kapcsos zárójelek között. Azáltal, hogy elveszed a --help -et a parancs után, a következőre változik a prefixum: \`:prefix\`',
			help_length_notice: 'Kérlek vedd figyelembe hogy a prefixum nem lehet több mint :limit karakter',
		},
		get_role: {
			no_role: 'Nincs rang megadva',
			role_not_self_assignable: 'Ez a rang nem állítható be sajátosan',
			enter_role: '> Adj meg egy rangot',
			help: 'Használd ezt a parancsot, hogy kapj egy sajátosan beállítható rangot, csak add meg melyik rangot szeretnéd a parancs után. Vagy, ha nem adtál meg egy rangot, majd után fog kérni egyet',
            admin_log: 'Rang hozzáadva parancsal'
		},
		remove_role: {
			no_role: 'Nincs rang megadva',
			role_not_self_assignable: 'Ez a rang nem állítható be sajátosan',
			enter_role: '> Adj meg egy rangot',
			admin_log: 'Rang eltávolítva parancsal'
		},
		list_role: {
			available_roles_for_guild: 'Elérhető rangok a :guild_name szerveren',
			no_self_assignable_roles: 'Nincsen sajátosan beállítható rang',
			no_category: 'Nincsen kategória',
			roles: 'Rangok'
		},
		list_language: {
			list: 'Szerver jelenlegi nyelve: :current_server_language\nFelhasználó jelenlegi nyelve: :current_user_language\nJelenlegi globálisan alapértelmezett nyelv: :current_global_language\n\nElérhető nyelvek:\n:available_languages\n\nHasználd a `:user_command` parancsot és írd be a nyelv nevét vagy a 2 betűs kódot hogy beállíthasd az általad kedvelt nyelvet\nHasználd a `:guild_command` parancsot, hogy megváltoztasd a szerver alapértelmezett nyelvét (csak adminisztrátor)',
			none: 'Nincs'
		},
		invite_link: {
			invite_link: "Szeretnéd meghívni a botot a saját szerveredre? Használd a következő linket!\n\n:link",
		},
		contribute: {
			contribute: "Szeretnéd továbbfejleszteni a botot? Ezt meg tudod tenni a github repo-ban! (Typescript / Eris)\n\n:link",
		},
		list_data: {
			list_data: "Az összes személyi adatod: \n```:data```\nHogy ezt eltávolítsd használd a `:command` parancsot"
		},
		list_dev: {
			list_dev: 'Dev mód a jelenlegi szerveren: `:mode`'
		},
		set_language: {
			enter_language: '> Add meg az általad kedvelt nyelvet',
			no_language: 'Semmilyen nyelv nem lett megadva',
			invalid_language: '`:language` érvénytelen vagy nincs támogatva',
			language_set: 'Nyelv beállítva!',
		},
		set_guild_language: {
			enter_language: '> Add meg az általad kedvelt nyelvet',
			no_language: 'Semmilyen nyelv nem lett megadva',
			invalid_language: '`:language` érvénytelen vagy nincs támogatva',
			language_set: 'Nyelv beállítva!',
			help: 'Állítsd be az alapértelmezett nyelvet a szerveren. A parancs után add meg a nyelvet/nyelv kódot. Vagy, ha nem adtál meg egy nyelvet, majd után fog kérni egyet. Kérlek tartsd szem elött, hogy a felhasználók által választott nyelv felülírja a szerveren választott alapértelmezettet.'
		},
		add_category: {
			enter_name: '> Írj egy kategórianevet',
			limit_reached: 'Elérted a maximum :limit kategória korlátot',
			no_name: 'Semmilyen név nem lett beírva a kategóriának',
			category_name_too_long: 'Az általad beírt név az túl hosszú, maximum karakterhossz az :limit',
			category_already_exists: 'A `:category` kategória már létezik',
			help: 'Kategóriákat használva könnyen beállíthatod, hogy hogy nézzen ki a rang lista. Csak addj egy nevet a kategóriának a parancs után. Vagy, ha nem adtál meg egy nevet, majd után fog kérni egyet',
		},
		add_role_to_category: {
			enter_category: '> Írj be egy kategóriát',
			no_category: 'Semmilyen kategória nem lett megadva',
			category_does_not_exist: 'A `:category` kategória nem létezik',
			too_many_roles_in_category: 'Túl sok rang a kategóriában! Csak :limit rang lehet kategóriánként',
			enter_role: '> Írj be egy rangot\n\nTipp: ragd a ` -a` a végére, hogy több rangot is tudj megadni vesszővel elválasztva',
			no_role: 'Semmilyen rang nem lett megadva',
			invalid_role: 'A `:role` rang nem létezik',
			role_not_self_assignable: 'A `:role` rang nem sajátosan beállítható',
			role_already_in_category: 'A `:role` rang már benne van a `:category` kategóriába',
			help: 'Ezzel a parancsal rangokat tudsz berakni kategóriákba, egy rangot több kategóriába is tudsz rakni. Csak használd a parancsot és írd be a kért részleteket'
		},
		list_categories: {
			no_categories: 'Még nincsenek kategóriák',
			categories_for: 'Elérhető kategóriák a :guild szerveren',
			categories: 'Kategóriák',
		},
		remove_role_from_category: {
			enter_category: '> Írj be egy kategóriát',
			no_category: 'Semmilyen kategória nem lett megadva',
			category_does_not_exist: 'A `:category` kategória nem létezik',
			enter_role: '> Írj be egy rangot',
			no_role: 'Semmilyen rang nem lett megadva',
			invalid_role: 'A `:role` rang nem létezik',
			role_not_in_category: 'A `:role` rang nincsen a `:category` kategóriában',
			help: 'Ezzel a parancsal el tudsz távolítani egy rangot egy kategóriából. Csak használd a parancsot és írd be a kért részleteket'
		},
		add_reaction_role: {
			enter_role: '> Írj be egy rangot',
			no_role: 'Semmilyen rang nem lett megadva',
			invalid_role: 'A `:role` rang nem létezik',
			role_not_self_assignable: 'A `:role` rang nem sajátosan beállítható',
			add_react: 'Add hozzá a reakciót a kívánt üzenetre',
			no_react: 'Semmilyen reakció nem lett hozzáadva',
			add_reaction_failed: 'Nem sikerült hozzáadni a reakciót, kérlek nézd meg hogy a szerverjogosultságok jól vannak beállítva',
			failed_removing_setup_react: 'Nem sikerült elvenni a reakciót. Kézzel is elveheted ha szeretnéd.',
			complete: 'Reakció rang sikeresen felállítva!',
			help: 'Ezzel a parancsal fel tudsz állítani reakció rangokat. Csak használd a parancsot és kövesd a megadott utasításokat'
		},
		remove_reaction_role: {
			info: 'Hogy eltávolítsd a reakció rangot, távolítsd el a bot reakcióját ami adja a rangot.',
		},
		list_reaction_roles: {
			no_roles: 'Nincsenek reakció rangok',
			roles_for_guild: 'Reakció rangok a :guild szerveren'
		},
		swap_categories: {
			enter_category_1: '> Írd be az első kategóriát',
			no_category_1: 'Első kategória nem lett beírva',
			invalid_category_1: 'A `:category` kategória nem létezik',
			enter_category_2: '> Írd be a második kategóriát',
			no_category_2: 'Második kategória nem lett beírva',
			invalid_category_2: 'A `:category` kategória nem létezik',
			enter_different_categories: 'A beírt kategóriák ugyan azok',
			help: 'Ezzel a parancsal be tudod állítani a kategóriák sorrendjét a rang listán azzal, hogy megcserélsz kéttőt. Csak használd a parancsot és írd be a kért részleteket'
		},
		swap_roles: {
			enter_role_1: '> Írd be az első rangot',
			no_role_1: 'Első rang nem lett beírva',
			invalid_role_1: 'A `:role` rang nem létezik',
			role_1_not_self_assignable: 'A `:role` rang nem sajátosan beállítható',
			enter_role_2: '> Írd be a második rangot',
			no_role_2: 'Második rang nem lett beírva',
			invalid_role_2: 'A `:role` rang nem létezik',
			role_2_not_self_assignable: 'A `:role` rang nem sajátosan beállítható',
			enter_different_roles: 'A beírt rangok ugyan azok',
			enter_category_or_none: '> Írj be egy kategóriát, vagy \'none\' semmilyen kategóriához', // Dont translate \`none\`
			invalid_category: 'A `:category` kategória nem létezik',
			category_does_not_have_both_roles: 'Ebben a kategóriában nem található mindakettő rang',
			success: 'Rangok megcserélve!',
		},
		add_self_assignable_role: {
			enter_role: '> Írj be egy rangot',
			no_role: 'Semmilyen rang nem lett megadva',
			invalid_role: 'A `:role` rang nem létezik',
			role_already_self_assignable: 'A `:role` rang már sajátosan beállítható',
			help: 'Ezzel a parancsal sajátosan beállítható rangokat tudsz létrehozni. Csak add meg a rangot a parancs után. Vagy, ha nem adtál meg egy rangot, majd után fog kérni egyet'
		},
		remove_self_assignable_role: {
			enter_role: '> Írj be egy rangot',
			no_role: 'Semmilyen rang nem lett megadva',
			invalid_role: 'A `:role` rang nem létezik',
			role_not_self_assignable: 'A `:role` rang nem sajátosan beállítható',
			help: 'Ezzel a parancsal sajátosan beállítható rangokat tudsz eltörölni. Csak add meg a rangot a parancs után. Vagy, ha nem adtál meg egy rangot, majd után fog kérni egyet'
		},
		privacy_policy: {
			policy: '**Data stored (guild based)**\nExan collects no logs. It only stores the bare minimum to make the core functionality - managing / providing self-assignable roles - functional.\n\n**Data stored (user based)**\nExan will not store any user based information unless the user changes their language away from the default set language. The only data Exan will store in this case is the 2 letter code associated with the language chosen. To view the data stored about you or delete it, please check the help menu for the commands.\n\nIf you do not have a language selected, you may notice it returns your Discord UUID. If no other data is returned, this data is not stored in the database. This is simply all data available to the bot at the runtime of the command.\n\n**Data removal**\nFor users there is a simple command available to remove all the data stored about you. If you would like all data of a guild (the self-assignable roles, reacts & default language) to be removed, please contact me (bot creator/owner) on Github. https://github.com/Exanlv/Exan\n\n**Third party involvement**\nThis bot is hosted on a Scaleway VPS. Their privacy policy may apply.'
		}
	},
	reactions: {
		add_role: 'Rang hozzáadva reakcióval',
		remove_role: 'Rang eltávolítva reakcióval',
		restore_role: 'Rang visszaállítva'
	}
}