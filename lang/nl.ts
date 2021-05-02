import { TranslationObject } from "../src/classes/Translator";

export const NL: TranslationObject = {
	commands: {
		base: {
			no_additional_help: 'Geen extra informatie beschikbaar',
		},
		help: {
			descriptions: {
				help: 'Laat dit menu zien',
				prefix: 'Laat de prefix zien voor de huidige server',
				set_prefix: 'Verander de prefix voor de huidige server',
				dev: 'Laat de staat van dev modus zien voor huidige server',
				toggle_dev: 'Schakel de staat van dev modus voor de huidige server om',
				eval: 'Voer code uit',
				self_assign: 'Beheer zelf-toewijzen voor de huidige server',
				self_assign_roles: 'Beheer zelf-toewijsbare rollen',
				self_assign_roles_add: 'Voeg een zelf-toewijsbare rol toe',
				self_assign_roles_remove: 'Verwijder een zelf-toewijsbare rol',
				self_assign_roles_swap: 'Wissel de posities van rollen in het rollen overzicht',
				self_assign_categories: 'Beheer categorieën voor zelf-toewijsbare rollen',
				self_assign_categories_add: 'Voeg een rollen categorie toe',
				self_assign_categories_list: 'Lijst rol categorieën uit',
				self_assign_categories_roles: 'Beheer rollen in categorieën',
				self_assign_categories_roles_add: 'Voeg een rol toe bij een categorie',
				self_assign_categories_roles_remove: 'Verwijder een rol van een categorie',
				self_assign_react: 'Beheer reactie rollen',
				self_assign_react_add: 'Voeg een reactie rol toe',
				self_assign_react_remove: 'Krijg instructies voor het verwijderen van een reactie rool',
				self_assign_react_list: 'Lijst reactie rollen uit',
				get_role: 'Wijs jezelf een rol toe',
				remove_role: 'Wijs jezelf een rol af',
				list_roles: 'Lijst beschikbare rollen uit',
				language: 'Lijst beschikbare talen uit',
				language_set: 'Zet je voorkeurstaal',
				language_guild: 'Lijst beschikbare talen uit',
				language_guild_set: 'Zet de standaard taal voor de server',
				invite: 'Krijg een invite link voor deze bot',
				contribute: 'Leer hoe je kan bijdragen aan de bot',
				my_data: 'Lijst de data verzameld over jou uit',
				my_data_remove: 'Verwijder alle data opgeslagen over jou',
				self_assign_categories_swap: 'Wissel de posities van 2 categorieën',
				privacy: 'Bekijk het privacy beleid',
			},
			sub_commands: 'Sub commando\'s:',
			commands_for: 'Beschikbare commando\'s voor :username:',
			description: 'Hieronder staan de commando\'s die voor jou beschikbaar zijn. Als je meer info wil over een specifieke commando, gebruik het commando met `--help` toegevoegd op aan het eind. Als je een korte omschrijving wilt over de sub commando\'s van een categorie, gebruik `:command %categorie%` met de categorie waarvan je meer info wilt',
			not_a_category: '`:category` is geen categorie, probeer `:command` te gebruiken zonder extra argumenten voor een lijst met categorieën',
		},
		error: {
			internal_error: 'Interne fout',
			internal_error_with_error: 'Interne fout `:error`'
		},
		missing_permissions: {
			missing_permissions: 'Je hebt niet de benodigde permissies voor dit commando!',
		},
		unknown_command: {
			unknown_command_use_help: 'Onbekend commando! Gebruik :help_command voor een lijst met commando\'s!'
		},
		prefix: {
			current_prefix: 'De prefix in gebruik voor de huidige server is `:prefix`',
		},
		set_prefix: {
			prefix_too_long: 'Deze prefix is te lang, gebruik een prefix niet langer dan :limit karakters',
			no_prefix: 'Plaats de gewenste prefix tussen 2 blokhaken, [zoals dit], gebruik \`:command\` voor meer info',
			prefix_set: 'Prefix aangepast!',
			help_example: 'Met dit commando kan je de prefix aanpasssen voor de huidige server. Plaats de gewenste prefix tussen blokhaken bij het gebruiken van het commando.\Voorbeeld: \`:command [--]\`, de nieuwe bot prefix zou zijn: \`--\`',
			help_show_prefix: 'Met dit commando kan je de prefix aanpasssen voor de huidige server. Plaats de gewenste prefix tussen blokhaken bij het gebruiken van het commando. als je de --help suffix weg haalt zou je de prefix van de bot veranderen naar \`:prefix\`',
			help_length_notice: 'Houd er rekening mee dat de prefix niet langer kan zijn dan :limit karakters',
		},
		get_role: {
			no_role: 'Geen rol opgegeven',
			role_not_self_assignable: 'Deze rol is niet zelf-toewijsbaar',
			enter_role: '> Voer een rol in',
			help: 'Gebruik dit commando om een rol te krijgen, voer de naam van de rol die je wil in na het commando om deze te krijgen. Alternatief, als je geen rol invoert word je gevraagd om er later een in te voeren',
            admin_log: 'Rol toegevoed met comando'
		},
		remove_role: {
			no_role: 'Geen rol opgegeven',
			role_not_self_assignable: 'Deze rol is niet zelf-toewijsbaar',
			enter_role: '> Voer een rol in',
			admin_log: 'Rol afgenomen met commando'
		},
		list_role: {
			available_roles_for_guild: 'Beschikbare rollen voor :guild_name',
			no_self_assignable_roles: 'Geen zelf-toewijsbare rollen',
			no_category: 'Geen categorie',
			roles: 'Rollen'
		},
		list_language: {
			list: 'Huidige taal voor server: :current_server_language\nHuidige taal voor gebruiker: :current_user_language\nHuidige globale standaard: :current_global_language\n\nLijst met beschikbare talen:\n:available_languages\n\nGebruik `:user_command` en voer de naam van de taal of de 2 letter code in om je voorkeurstaal te wijzigen\nGebruik `:guild_command` om de standaard taal van de guild aan te passen (alleen voor administratoren)',
			none: 'Geen'
		},
		invite_link: {
			invite_link: "Wil je de bot toevoegen aan je eigen server? Gebruik deze link!\n\n:link",
		},
		contribute: {
			contribute: "Wil je bijdragen aan deze bot? Dat kan bij de github repository! (Typescript / Eris)\n\n:link",
		},
		list_data: {
			list_data: "Al je persoonlijke data: \n```:data```\nOm je data te verwijderen, gebruik `:command`"
		},
		list_dev: {
			list_dev: 'Dev modus voor de huidige server staat op `:mode`'
		},
		set_language: {
			enter_language: '> Voer voorkeurstaal in',
			no_language: 'Geen taal was opgegeven',
			invalid_language: '`:language` is ongeldig of niet ondersteund',
			language_set: 'Taal aangepast!',
		},
		set_guild_language: {
			enter_language: '> Voer voorkeurstaal in',
			no_language: 'Geen taal was opgegeven',
			invalid_language: '`:language` is ongeldig of niet ondersteund',
			language_set: 'Taal aangepast!',
			help: 'Stel de standaard taal voor de server in. Voer de taal of taal code in na het commando. Alternatief, als je geen taal invoert, word je gevraagd om deze hierna in te voeren. Houd er rekening mee dat gebruikers de taal voor de server kunnen overschrijven voor commando\'s die door hen gebruikt worden'
		},
		add_category: {
			enter_name: '> Voer een categorie naam in',
			limit_reached: 'Je hebt het limiet van :limit categorieën bereikt',
			no_name: 'Geen naam voor de categorie was opgegeven',
			category_name_too_long: 'De naam die je hebt opgegeven is te lang, de maximale lengte is :limit',
			category_already_exists: 'Categorie `:category` bestaat al',
			help: 'Met categorieën kan je de lijst van rollen organiseren. Voer een naam voor de categorie in na het commando. Alternatief, als je geen naam invoert. word je gevraagd om deze hierna in te voeren.',
		},
		add_role_to_category: {
			enter_category: '> Voer een categorie in',
			no_category: 'Geen categorie opgegeven',
			category_does_not_exist: 'Categorie `:category` bestaat niet',
			too_many_roles_in_category: 'Te veel rollen in de categorie! Je kan maar :limit rollen per categorie hebben',
			enter_role: '> Voer een rol in\n\nTip: voeg ` -a` toe aan het einde om meerdere rollen tegelijk toe te voegen, gesplitst met komma\'s',
			no_role: 'Geen rol was opgegeven',
			invalid_role: 'Rol `:role` bestaat niet',
			role_not_self_assignable: 'Rol `:role` is niet zelf-toewijsbaar',
			role_already_in_category: 'Role `:role` zit al in categorie `:category`',
			help: 'Met dit commando kan je een rol toevoegen aan een categorie, het is mogelijk om een rol in meerdere categorieën te plaatsen. Gebruik het commando en voer de gevraagde gegevens in'
		},
		list_categories: {
			no_categories: 'Er zijn nog geen categorieën',
			categories_for: 'Beschikbare categorieën voor :guild',
			categories: 'Categorieën',
		},
		remove_role_from_category: {
			enter_category: '> Voer een categorie in',
			no_category: 'Geen categorie opgegeven',
			category_does_not_exist: 'Categorie `:category` bestaat niet',
			enter_role: '> Voer een rol in',
			no_role: 'Geen rol was opgegeven',
			invalid_role: 'Rol `:role` bestaat niet',
			role_not_in_category: 'Role `:role` zit niet in categorie `:category`',
			help: 'Met dit commando kan je een rol verwijderen uit een categorie. Gebruik het commando en voer de gevraagde gegevens in'
		},
		add_reaction_role: {
			enter_role: '> Voer een rol in',
			no_role: 'Geen rol was opgegeven',
			invalid_role: 'Rol `:role` bestaat niet',
			role_not_self_assignable: 'Rol `:role` is niet zelf-toewijsbaar',
			add_react: 'Voeg de reactie toe aan het gewenste bericht',
			no_react: 'Geen reactie was toegevoegd',
			add_reaction_failed: 'Het is niet gelukt om de reactie toe te voegen. Controleer of de permissies goed zijn ingesteld',
			failed_removing_setup_react: 'Het is niet gelukt om jouw reactie te verwijderen. Je kan hem zelf verwijderen indien gewenst.',
			complete: 'Reactie rol succesvol ingesteld!',
			help: 'Met deze command kan je een reactie rol toevoegen. Gebruik het commando en volg de stappen'
		},
		remove_reaction_role: {
			info: 'Om een reactie rol te verwijderen, verwijder de reactie van de bot op het bericht.',
		},
		list_reaction_roles: {
			no_roles: 'Er zijn geen reactie rollen',
			roles_for_guild: 'Reactie rollen voor :guild'
		},
		swap_categories: {
			enter_category_1: '> Voer eerste categorie in',
			no_category_1: 'Geen eerste categorie was opgegeven',
			invalid_category_1: 'Categorie `:category` bestaat niet',
			enter_category_2: '> Voer tweede categorie in',
			no_category_2: 'Geen tweede categorie was opgegeven',
			invalid_category_2: 'Categorie `:category` bestaat niet',
			enter_different_categories: 'De opgegeven categorieën zijn hetzelfde',
			help: 'Met dit commando kan je de volgorde van categorieën aanpassen in de rollen lijst door het om te wisselen van 2 categoriën. Gebruik het commando en voer de gevraagde gegevens in'
		},
		swap_roles: {
			enter_role_1: '> Voer eerste rol in',
			no_role_1: 'Geen eerste rol was opgegeven',
			invalid_role_1: 'Rol `:role` bestaat niet',
			role_1_not_self_assignable: 'Rol `:role` is niet zelf-toewijsbaar',
			enter_role_2: '> Voor tweede rol in',
			no_role_2: 'Geen tweede rol was opgegeven',
			invalid_role_2: 'Rol `:role` bestaat niet',
			role_2_not_self_assignable: 'Rol `:role` is niet zelf-toewijsbaar',
			enter_different_roles: 'De opgegeven rollen zijn hetzelfde',
			enter_category_or_none: '> Voer categorie in, \'none\' indien geen categorie', // Dont translate \`none\`
			invalid_category: 'Categorie `:category` bestaat niet',
			category_does_not_have_both_roles: 'Deze categorie bevat niet beide opgegeven rollen',
			success: 'Rollen omgedraaid!',
		},
		add_self_assignable_role: {
			enter_role: '> Voer een rol in',
			no_role: 'Geen rol was opgegeven',
			invalid_role: 'Rol `:role` bestaat niet',
			role_already_self_assignable: 'Rol `:role` is al zelf-toewijsbaar',
			help: 'Met dit commando kan je rollen zelf-toewijsbaar maken. voer de naam van de rol in na het commando. Alternatief, als je geen rol invoert word je gevraagd om er later een in te voeren'
		},
		remove_self_assignable_role: {
			enter_role: '> Voer een rol in',
			no_role: 'Geen rol was opgegeven',
			invalid_role: 'Rol `:role` bestaat niet',
			role_not_self_assignable: 'Rol `:role` is al niet zelf-toewijsbaar',
			help: 'Met dit commando kan je rollen niet zelf-toewijsbaar maken. voer de naam van de rol in na het commando. Alternatief, als je geen rol invoert word je gevraagd om er later een in te voeren'
		},
		privacy_policy: {
			policy: '**Data stored (guild based)**\nExan collects no logs. It only stores the bare minimum to make the core functionality - managing / providing self-assignable roles - functional.\n\n**Data stored (user based)**\nExan will not store any user based information unless the user changes their language away from the default set language. The only data Exan will store in this case is the 2 letter code associated with the language chosen. To view the data stored about you or delete it, please check the help menu for the commands.\n\nIf you do not have a language selected, you may notice it returns your Discord UUID. If no other data is returned, this data is not stored in the database. This is simply all data available to the bot at the runtime of the command.\n\n**Data removal**\nFor users there is a simple command available to remove all the data stored about you. If you would like all data of a guild (the self-assignable roles, reacts & default language) to be removed, please contact me (bot creator/owner) on Github. https://github.com/Exanlv/Exan\n\n**Third party involvement**\nThis bot is hosted on a Scaleway VPS. Their privacy policy may apply.'
		}
	},
	reactions: {
		add_role: 'Rol toegevoegd met reactie',
		remove_role: 'Rol verwijderd ',
		restore_role: 'Rol hersteld'
	}
}