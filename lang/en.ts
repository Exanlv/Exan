import { TranslationObject } from "../src/classes/Translator";

export const EN: TranslationObject = {
	commands: {
		base: {
			command_not_implemented: 'This command hasn\'t been implemented yet!',
			no_additional_help: 'No additional help available',
		},
		help: {
			available_commands: 'Available commands: ',
			no_description: 'No description available',
		},
		error: {
			internal_error: 'Internal error',
			internal_error_with_error: 'Internal error `:error`'
		},
		missing_permissions: {
			missing_permissions: 'You dont have the required permissions to use this command!',
		},
		unknown_command: {
			unknown_command_use_help: 'Unknown command! Use :help_command for a list of commands!'
		},
		prefix: {
			current_prefix: 'The prefix used for the current guild is `:prefix`',
		},
		set_prefix: {
			prefix_too_long: 'This prefix is too long, please use a prefix no longer than 32 characters',
			no_prefix: 'Put the desired prefix between square brackets, [like this], for more info run \`:command\`',
			prefix_set: 'Prefix set!',
			help_example: 'With this command you can change the prefix used on the current guild. Provide the prefix you want to be used between square brackets when using the command.\nExample: \`:command [--]\`, the new bot prefix would be \`--\`',
			help_show_prefix: 'With this command you can change the prefix used on the current guild. Provide the prefix you want to be used between square brackets when using the command. By removing the --help suffix, you would change the bot prefix to \`:prefix\`',
			help_length_notice: 'Please note the prefix can not be over 32 characters',
		},
		get_role: {
			no_role: 'No role given',
			role_not_self_assignable: 'This role is not self-assignable',
			enter_role: '> Enter a role'
		},
		remove_role: {
			no_role: 'No role given',
			role_not_self_assignable: 'This role is not self-assignable',
			enter_role: '> Enter a role'
		},
		list_role: {
			available_roles_for_guild: 'Available roles for :guild_name',
			no_self_assignable_roles: 'No self-assignable roles',
			no_category: 'No category',
			roles: 'Roles'
		},
		list_language: {
			list: 'Current language for server: :current_server_language\nCurrent language for user: :current_user_language\nCurrent global default: :current_global_language\n\nList of available languages:\n:available_languages\n\nUse `:user_command` and enter the language name or 2 letter code to change your prefered language\nUse `:guild_command` to change the default for the current guild (admin only)',
			none: 'None'
		}
	}
}