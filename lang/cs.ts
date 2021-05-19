import { TranslationObject } from "../src/classes/Translator";

export const CS: TranslationObject = {
	commands: {
		base: {
			no_additional_help: 'Nejsou k dispozici žádné další informace',
		},
		help: {
			descriptions: {
				help: 'Zobrazit toto menu',
				prefix: 'Zobrazit prefix pro tento server',
				set_prefix: 'Nastavit prefix pro tento server',
				dev: 'Zobrazit režim pro vývojáře pro tento server',
				toggle_dev: 'Přepnou režim pro vývojáře pro tento server',
				eval: 'Spustit kód',
				self_assign: 'Spravovat automatické přiřazování pro tento server',
				self_assign_roles: 'Spravovat automaticky přiřazovací role',
				self_assign_roles_add: 'Přidat automaticky přiřazovací rolí',
				self_assign_roles_remove: 'Odebrat automaticky přiřazovací roli',
				self_assign_roles_swap: 'Přehodit pozici rolí v přehledu rolí',
				self_assign_categories: 'Spravovat kategorie pro automaticky přiřazovací role',
				self_assign_categories_add: 'Přidat kategorii rolí',
				self_assign_categories_list: 'Zobrazit kategorie',
				self_assign_categories_roles: 'Spravovat role v kategorii',
				self_assign_categories_roles_add: 'Přidat roli do kategorie',
				self_assign_categories_roles_remove: 'Odebrat roli do kategorie',
				self_assign_react: 'Spravovat reakční role',
				self_assign_react_add: 'Přidat reakční roli',
				self_assign_react_remove: 'Získat instrukce pro odebrání reakční role',
				self_assign_react_list: 'Zobrazit reakční role',
				get_role: 'Získat role',
				remove_role: 'Odstranit roli',
				list_roles: 'Zobrazit dostupné role',
				language: 'Zobrazit dostupné jazyky',
				language_set: 'Nastavit preferovaný jazyk',
				language_guild: 'Zobrazit dostupné jazyky',
				language_guild_set: 'Nastavit základní jazyk pro tento server',
				invite: 'Získejte pozvánku pro tohoto bota',
				contribute: 'Zjistěte jak se podílet na vývoji',
				my_data: 'Zobrazit data shromážděná o vás',
				my_data_remove: 'Odstranit všechny osobní údaje o vás',
				self_assign_categories_swap: 'Vyměnit pozici dvou kategorií',
				privacy: 'See the privacy policy',
			},
			sub_commands: 'Sekundární příkazy:',
			commands_for: 'Dostupné příkazy pro :username:',
			description: 'Níže jsou uvedeny dostupné příkazy. Pokud chcete více informací o konkrétním příkazu, použijte příkaz s `--help` na konci. Pokud chcete stručný popis sekundárních příkazů kategorie, použijte `:command %category%` s kategorií, o které chcete více informací',
			not_a_category: '`:category` není kategorie, zkuste použít `:command` bez dalších argumentů pro seznam kategorií',
		},
		error: {
			internal_error: 'interní chyba',
			internal_error_with_error: 'interní chyba `:error`'
		},
		missing_permissions: {
			missing_permissions: 'Nemáš dostatečné oprávnění pro vykonání tohoto příkazu!',
		},
		unknown_command: {
			unknown_command_use_help: 'Neznámý příkaz! použij :help_command pro seznam příkazů!'
		},
		prefix: {
			current_prefix: 'Prefix pro tento server je `:prefix`',
		},
		set_prefix: {
			prefix_too_long: 'Tento prefix je příliš dlouhý, prosím použijte prefix kratší než :limit charakterů',
			no_prefix: 'Vložte požadovaný prefix mezi hranaté závorky [takto], další informace získáte vykonáním \`:command\`',
			prefix_set: 'Prefix nastaven!',
			help_example: 'Pomocí tohoto příkazu můžeš změnit prefix používaný na tomto serveru. Poskytněte prefix terý chcete používat v hranatých závorkách když budete používat tento příkaz.\Příklad: \`:command [--]\`, nový prefix bude \`--\`',
			help_show_prefix: 'Pomocí tohoto příkazu můžeš změnit prefix používaný na tomto serveru. Poskytněte prefix terý chcete používat v hranatých závorkách když budete používat tento příkaz. Když odstraníte  --help příponu, změnili by jste prefix na \`:prefix\`',
			help_length_notice: 'Prosím mějte na paměti že prefix nesmí být delší zež :limit charakterů',
		},
		get_role: {
			no_role: 'Nebyla specifikována žádná role',
			role_not_self_assignable: 'Tato role není automaticky přiřazovatelná',
			enter_role: '> Zadej roli',
			help: 'Použil tento příkaz pro získání role, jednodužše po tomto příkazu přidej roli kterou chceš Alternatively, pokud žádnou nezadáš, budeš ji muset zadat později',
            admin_log: 'Přidána role pomocí příkazu'
		},
		remove_role: {
			no_role: 'Nebyla specifikována žádná role',
			role_not_self_assignable: 'Tato role není automaticky přiřazovatelná',
			enter_role: '> Zadej roli',
			admin_log: 'Odstraněna role pomocí kříkazu'
		},
		list_role: {
			available_roles_for_guild: 'Dostupné role pro :guild_name',
			no_self_assignable_roles: 'Žádné automaticky přiřazovací role',
			no_category: 'Žádná kategorie',
			roles: 'Role'
		},
		list_language: {
			list: 'Aktuální jazyk pro server: :current_server_language\nAktuální jazyk pro uživatele: :current_user_language\nAktualní globalní nastavení: :current_global_language\n\nSeznam dostupných jazyků:\n:available_languages\n\nPoužij `:user_command` and zadej jeméno jazyka nebo dvoupísmený kód pro změnu vašeho preferovaného jazyku.\nPoužij `:guild_command` pro změnu základního jazyku pro tento server (pouze admin).',
			none: 'Žádné'
		},
		invite_link: {
			invite_link: "Chceš pozvat bota na svůj server? Použij následující odkaz: \n\n:link",
		},
		contribute: {
			contribute: "Chceš se podílet na vývoji tohoto bota? Můžete tak učinit na github složce (Typescript / Eris)\n\n:link",
		},
		list_data: {
			list_data: "Všechna vaše osobní data\n```:data```\nPro jejich odstranění, použijte `:command`"
		},
		list_dev: {
			list_dev: 'Vývojářský režim pro tento server je nastaven `:mode`'
		},
		set_language: {
			enter_language: 'Zadej preferovaný jazyk',
			no_language: 'Nebyl zadán žádný jazyk',
			invalid_language: '`:language` není platný nebo není podporován',
			language_set: 'Jazyk nastaven!',
		},
		set_guild_language: {
			enter_language: 'Zadej preferovaný jazyk',
			no_language: 'Nebyl zadán žádný jazyk',
			invalid_language: '`:language` není platný nebo není podporován',
			language_set: 'Jazyk nastaven!',
			help: 'Byl nastaven výhozí jazyk pro tento server. Po příkazu přidejte požadovaný jazyk/kód jazyka. Pokud nezadáte jazyk, budete vyzváni k jeho zadání později. Pamatujte, že uživatelé si mohou vybrat svůj svůj jazyk, který změní výchozí nastavení na tomto serveru pro příkazy, které používají.'
		},
		add_category: {
			enter_name: '> Zadej název kategorie',
			limit_reached: 'Dosáhl si limit :limit kategorií',
			no_name: 'Nebylo zadáno žádné jméno pro kategorii',
			category_name_too_long: 'Jméno které jsi zadal je příliš dlouhé, maximální délka je :limit',
			category_already_exists: 'Kategorie `:category` už existuje',
			help: 'Použitím kategorií můžete uspořádat zobrazení v seznamu. Jednodužše zadejte jméno kategorie po příkazu. Pokud nezadáte jazyk, budete vyzváni k jeho zadání později',
		},
		add_role_to_category: {
			enter_category: '> Zadej kategorii',
			no_category: 'Nebyla zadána žádná kategorie.',
			category_does_not_exist: 'kategorie `:category` neexistuje',
			too_many_roles_in_category: 'Příliš mnoho rolí v kategorii! Můžete mít pouze :limit rolí v každé kategorii',
			enter_role: '> Zadej rolu\n\nTip: přidej ` -a` na konec pro přidání více rolí oddělených čárkou',
			no_role: 'Nebyla zadána žádná role',
			invalid_role: 'Role `:role` neexistuje',
			role_not_self_assignable: 'Role `:role` není automaticky přiřazovatelná',
			role_already_in_category: 'Role `:role` již je v kategorii `:category`',
			help: 'Pomocí tohoto příkazu mužete přidat roli do kategorie, přidávání více rolé je možné. Jednodužše použijte příkaz a zadejte požadované podrobnosti'
		},
		list_categories: {
			no_categories: 'Zatím tu nejsou žádné kategorie',
			categories_for: 'Dosutpné kategorie pro :guild',
			categories: 'Kategorie',
		},
		remove_role_from_category: {
			enter_category: '> Zadej kategorii',
			no_category: 'Nebyla zadána žádná kategorie',
			category_does_not_exist: 'Kategorie `:category` neexistuje',
			enter_role: '> Zadej rolu',
			no_role: 'Nebyla zadána žádná role',
			invalid_role: 'Role `:role` neexistuje',
			role_not_in_category: 'Role `:role` není v kategorii `:category`',
			help: 'Pomocí tohoto příkazu můžete odstranit roli z kategorie. Jednodužše použijte příkaz a zadejte požadované podrobnosti'
		},
		add_reaction_role: {
			enter_role: '> Zadej rolu',
			no_role: 'Nebyla zadána žádná role',
			invalid_role: 'Role `:role` neexistuje',
			role_not_self_assignable: 'Role `:role` není automaticky přiřazovatelná',
			add_react: 'Přidej reakci kterou chcete nastavit pro zprávu',
			no_react: 'Žádná reakce nebyla přidána',
			add_reaction_failed: 'Nepodařilo se přidat reakci, prosím zkontrolujte jestli jsou oprávnění nastavená správně',
			failed_removing_setup_react: 'Nepodařilo se odstranit reakci ze zprávy. Můžete ji odstranit manuálně jestli chcete.',
			complete: 'Reakční role úspěšně nastavena!',
			help: 'Pomocí tohoto příkazu můžete nastavit reakční role. Jednodužše použijte příkaz a zadejte požadované podrobnosti'
		},
		remove_reaction_role: {
			info: 'Pro odstranění reakční role, odstrantě reakci bota která přidává tuto roli.',
		},
		list_reaction_roles: {
			no_roles: 'Nejsou to žádné reakční role',
			roles_for_guild: 'Reakční role pro :guild'
		},
		swap_categories: {
			enter_category_1: '> Zadej první kategorii',
			no_category_1: 'Nebyla zadána první kategorie',
			invalid_category_1: 'Kategorie `:category` neexistuje',
			enter_category_2: '> Zadej druhou kategorii',
			no_category_2: 'Nebyla zadána druhá kategorie',
			invalid_category_2: 'Kategorie `:category` neexistuje',
			enter_different_categories: 'Zadané kategorie jsou stejné.',
			help: 'Pomocí tohoto příkazu můžete změnit pořadí kategorií v seznamu rolí pomocí vyměněním dvou kategorií. Jednodužše použijte příkaz a zadejte požadované podrobnosti'
		},
		swap_roles: {
			enter_role_1: '> zadej první roli',
			no_role_1: 'Nebyla zadána první role',
			invalid_role_1: 'Role `:role` neexistuje',
			role_1_not_self_assignable: 'Role `:role` není automaticky přiřazovatelná',
			enter_role_2: '> Zadej druhou kategorii roli',
			no_role_2: 'Nebyla zadána druhá role',
			invalid_role_2: 'Role `:role` neexistuje',
			role_2_not_self_assignable: 'Role `:role` není automaticky přiřazovatelná',
			enter_different_roles: 'Zadané role jsou stejné.',
			enter_category_or_none: '> Zadej kategorii, \'none\' pro žádnou kategorii', // Dont translate \`none\`
			invalid_category: 'Kategorie `:category` neexistuje',
			category_does_not_have_both_roles: 'Tato kategorie nemá obě specifikované role',
			success: 'Role přehozeny',
		},
		add_self_assignable_role: {
			enter_role: '> Zadej role',
			no_role: 'Nebyla zadána žádná role',
			invalid_role: 'Role `:role` neexistuje',
			role_already_self_assignable: 'Role `:role` už je  automaticky přiřazovatelná',
			help: 'Pomocí tohoto příkazu můžete nastavit automaticky přiřazovací role. Jednodužše použijte příkaz a zadejte požadované podrobnosti'
		},
		remove_self_assignable_role: {
			enter_role: '> Zadej roli',
			no_role: 'Nebyla zadána žádná role',
			invalid_role: 'Role `:role` neexistuje',
			role_not_self_assignable: 'Role `:role` není automaticky přiřazovatelná',
			help: 'With this command you can remove self-assignable roles. Simply add the role after the command. Pokud nezadáte roli, budete k tomu vyzváni později'
		},
		privacy_policy: {
			policy: '**Data stored (guild based)**\nExan collects no logs. It only stores the bare minimum to make the core functionality - managing / providing self-assignable roles - functional.\n\n**Data stored (user based)**\nExan will not store any user based information unless the user changes their language away from the default set language. The only data Exan will store in this case is the 2 letter code associated with the language chosen. To view the data stored about you or delete it, please check the help menu for the commands.\n\nIf you do not have a language selected, you may notice it returns your Discord UUID. If no other data is returned, this data is not stored in the database. This is simply all data available to the bot at the runtime of the command.\n\n**Data removal**\nFor users there is a simple command available to remove all the data stored about you. If you would like all data of a guild (the self-assignable roles, reacts & default language) to be removed, please contact me (bot creator/owner) on Github. https://github.com/Exanlv/Exan\n\n**Third party involvement**\nThis bot is hosted on a Scaleway VPS. Their privacy policy may apply.'
		}
	},
	reactions: {
		add_role: 'Přidána role pomocí reakce',
		remove_role: 'Odebrána role pomocí reakce',
		restore_role: 'Role obnovena'
	}
}