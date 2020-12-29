import { TranslationObject } from "../src/classes/Translator";

export const NL: TranslationObject = {
	commands: {
		base: {
			command_not_implemented: 'Dit commando is not niet geïmplementeerd',
			no_additional_help: 'Geen extra informatie beschikbaar',
		},
		help: {
			available_commands: 'Beschikbare commando\'s: ',
			no_description: 'Geen beschrijving beschikbaar',
		},
		error: {
			internal_error: 'Interne foutmelding',
			internal_error_with_error: 'Interne foutmelding `:error`'
		},
		missing_permissions: {
			missing_permissions: 'Je hebt niet de benodigde bevoegdheden om dit commando te gebruiken!',
		},
		unknown_command: {
			unknown_command_use_help: 'Onbekend commando! Gebruik :help_command voor een lijst met beschikbare commando\'s!'
		},
		prefix: {
			current_prefix: 'Het voorvoegsel voor deze gilde is `:prefix`',
		},
		get_role: {
			no_role: 'Geen rol ingevoerd',
			role_not_self_assignable: 'Deze rol is niet beschikbaar',
			enter_role: '> Voer een rol in'
		},
		remove_role: {
			no_role: 'Geen rol ingevoerd',
			role_not_self_assignable: 'Deze rol is niet beschikbaar',
			enter_role: '> Voer een rol in'
		},
		list_role: {
			available_roles_for_guild: 'Beschikbare rollen voor :guild_name',
			no_self_assignable_roles: 'Geen zelf aanwijsbare rollen',
			no_category: 'Geen categorie',
			roles: 'Rollen'
		},
	}
}