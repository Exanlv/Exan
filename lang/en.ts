import { TranslationObject } from "../src/classes/Translator";

export const EN: TranslationObject = {
	commands: {
		base: {
			no_additional_help: 'No additional help available',
		},
		help: {
			descriptions: {
				help: 'Show this menu',
				prefix: 'Show the prefix for the current guild',
				set_prefix: 'Set the prefix for the current guild',
				dev: 'List dev mode for the current guild',
				toggle_dev: 'Toggle dev mode for the current guild',
				eval: 'Execute code',
				self_assign: 'Manage self-assign for guild',
				self_assign_roles: 'Manage self-assignable roles',
				self_assign_roles_add: 'Add a self assignable role',
				self_assign_roles_remove: 'Remove a self assignable role',
				self_assign_categories: 'Manage categories for self-assignable roles',
				self_assign_categories_add: 'Add a role category',
				self_assign_categories_list: 'List role categories',
				self_assign_categories_roles: 'Manage roles in categories',
				self_assign_categories_roles_add: 'Add a role to a category',
				self_assign_categories_roles_remove: 'Remove a role from a category',
				self_assign_react: 'Manage reaction roles',
				self_assign_react_add: 'Add a reaction role',
				self_assign_react_remove: 'Get instructions for removing a reaction role',
				self_assign_react_list: 'List reaction roles',
				get_role: 'Get a role',
				remove_roles: 'Remove a role',
				list_roles: 'List available roles',
				language: 'List available languages',
				language_set: 'Set your prefered language',
				language_guild: 'List available languages',
				language_guild_set: 'Set default language for guild',
				invite: 'Get invite link for this bot',
				contribute: 'Learn how to contribute to the bot',
				my_data: 'List the data collected about you',
				my_data_remove: 'Remove all personal data collected about you',
			},
			commands_for: 'Available commands for :username:',
			description: 'Below are the commands available to you. If you want more info about a specific command, use the command with `--help` added at the end. If you want a brief description of the sub commands of a category, use `:command %category%` with the category you want more info on',
			not_a_category: '`:category` is not a category, try using `:command` without extra arguments for a list of categories',
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
			prefix_too_long: 'This prefix is too long, please use a prefix no longer than :limit characters',
			no_prefix: 'Put the desired prefix between square brackets, [like this], for more info run \`:command\`',
			prefix_set: 'Prefix set!',
			help_example: 'With this command you can change the prefix used on the current guild. Provide the prefix you want to be used between square brackets when using the command.\nExample: \`:command [--]\`, the new bot prefix would be \`--\`',
			help_show_prefix: 'With this command you can change the prefix used on the current guild. Provide the prefix you want to be used between square brackets when using the command. By removing the --help suffix, you would change the bot prefix to \`:prefix\`',
			help_length_notice: 'Please note the prefix can not be over :limit characters',
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
		},
		invite_link: {
			invite_link: "Want to invite the bot to your own guild? Use the following link!\n\n:link",
		},
		contribute: {
			contribute: "Want to contribute to this bot? You can do so on the github repository! (Typescript / Eris)\n\n:link",
		},
		list_data: {
			list_data: "All your personal data: \n```:data```\nTo remove your data use `:command`"
		}
	}
}