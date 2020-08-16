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
				self_assign_roles_swap: 'Swap the position of roles in the roles overview',
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
				remove_role: 'Remove a role',
				list_roles: 'List available roles',
				language: 'List available languages',
				language_set: 'Set your prefered language',
				language_guild: 'List available languages',
				language_guild_set: 'Set default language for guild',
				invite: 'Get invite link for this bot',
				contribute: 'Learn how to contribute to the bot',
				my_data: 'List the data collected about you',
				my_data_remove: 'Remove all personal data collected about you',
				self_assign_categories_swap: 'Swap the position of 2 categories',
			},
			sub_commands: 'Sub commands:',
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
			enter_role: '> Enter a role',
			help: 'Use this command to get a role, simply add the role you want to get after the command. Alternatively, if you dont enter a role, you will be prompted to enter one afterwards',
		},
		remove_role: {
			no_role: 'No role given',
			role_not_self_assignable: 'This role is not self-assignable',
			enter_role: '> Enter a role',
			admin_log: 'Removed role with command'
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
		},
		list_dev: {
			list_dev: 'Dev mode for current guild is set to `:mode`'
		},
		set_language: {
			enter_language: '> Enter prefered language',
			no_language: 'No language was given',
			invalid_language: '`:language` is invalid or not supported',
			language_set: 'Language set!',
		},
		set_guild_language: {
			enter_language: '> Enter prefered language',
			no_language: 'No language was given',
			invalid_language: '`:language` is invalid or not supported',
			language_set: 'Language set!',
			help: 'Set the default language for the guild. Add the language/language code you want after the command. Alternatively, if you dont enter a language, you will be prompted to enter one afterwards. Please keep in mind that users can pick their own language which will overwrite the guild default for commands used bu them.'
		},
		add_category: {
			limit_reached: 'You reached the limit of :limit categories',
			no_name: 'No name for the category was entered',
			category_name_too_long: 'The name you entered is too long, the max length is :limit',
			category_already_exists: 'Category `:category` already exists',
			help: 'Using categories you can sort the way the roles list looks. Simply add the name for a category after the command. Alternatively, if you dont enter a name, you will be prompted to enter one afterwards',
		},
		add_role_to_category: {
			enter_category: '> Enter a category',
			no_category: 'No category was given',
			category_does_not_exist: 'Category `:category` does not exist',
			too_many_roles_in_category: 'Too many roles in category! You can only have :limit roles per category',
			enter_role: '> Enter a role\n\nTip: add ` -a` to the end to add multiple roles at once seperated by comma',
			no_role: 'No role was given',
			invalid_role: 'Role `:role` does not exist',
			role_not_self_assignable: 'Role `:role` is not self-assignable',
			role_already_in_category: 'Role `:role` is already in category `:category`',
			help: 'With this command you can add a role to a category, adding a role to multiple categories is possible. Simply use the command and enter the requested details'
		},
		list_categories: {
			no_categories: 'There are no categories yet',
			categories_for: 'Available categories for :guild',
			categories: 'Categories',
		},
		remove_role_from_category: {
			enter_category: '> Enter a category',
			no_category: 'No category was given',
			category_does_not_exist: 'Category `:category` does not exist',
			enter_role: '> Enter a role',
			no_role: 'No role was given',
			invalid_role: 'Role `:role` does not exist',
			role_not_in_category: 'Role `:role` is not in category `:category`',
			help: 'With this command you can remove a role to a category. Simply use the command and enter the requested details'
		},
		add_reaction_role: {
			enter_role: '> Enter a role',
			no_role: 'No role was given',
			invalid_role: 'Role `:role` does not exist',
			role_not_self_assignable: 'Role `:role` is not self-assignable',
			add_react: 'Add the react you want to the desired message',
			no_react: 'No react was added',
			add_reaction_failed: 'Failed to add a react, please check if permissions are set up correctly',
			failed_removing_setup_react: 'Failed to remove your react on the message. You can remove it manually if desired.',
			complete: 'Reaction role set up successfully!',
			help: 'With this command you can set up reaction roles. Simply use the command and follow the steps provided'
		},
		remove_reaction_role: {
			info: 'To remove the reaction role, remove the bots reaction that gives the role.',
		},
		list_reaction_roles: {
			no_roles: 'There are no reaction roles',
			roles_for_guild: 'Reaction roles for :guild'
		},
		swap_categories: {
			enter_category_1: '> Enter first category',
			no_category_1: 'No first category was entered',
			invalid_category_1: 'Category `:category` does not exist',
			enter_category_2: '> Enter second category',
			no_category_2: 'No second category was entered',
			invalid_category_2: 'Category `:category` does not exist',
			enter_different_categories: 'The categories entered are the same',
			help: 'With this command you can change the order of categories displayed in the roles list by swapping 2 categories. Simply use the command and enter the requested details'
		},
		swap_roles: {
			enter_role_1: '> Enter first role',
			no_role_1: 'No first role was entered',
			invalid_role_1: 'Role `:role` does not exist',
			role_1_not_self_assignable: 'Role `:role` is not self-assignable',
			enter_role_2: '> Enter second role',
			no_role_2: 'No first role was entered',
			invalid_role_2: 'Role `:role` does not exist',
			role_2_not_self_assignable: 'Role `:role` is not self-assignable',
			enter_different_roles: 'The roles entered are the same',
			enter_category_or_none: '> Enter category, \'none\' for no category', // Dont translate \`none\`
			invalid_category: 'Category `:category` does not exist',
			category_does_not_have_both_roles: 'This category does not have both specified roles',
			success: 'Roles swapped!',
		},
		add_self_assignable_role: {
			enter_role: '> Enter a role',
			no_role: 'No role was given',
			invalid_role: 'Role `:role` does not exist',
			role_already_self_assignable: 'Role `:role` is already self-assignable',
			help: 'With this command you can make roles self-assignable. Simply add the role after the command. Alternatively, if you dont enter a role, you will be prompted to enter one afterwards'
		},
		remove_self_assignable_role: {
			enter_role: '> Enter a role',
			no_role: 'No role was given',
			invalid_role: 'Role `:role` does not exist',
			role_not_self_assignable: 'Role `:role` is not self-assignable',
			help: 'With this command you can remove self-assignable roles. Simply add the role after the command. Alternatively, if you dont enter a role, you will be prompted to enter one afterwards'
		},
		privacy_policy: {
			policy: '**Data stored (guild based)**\nExan collects no logs. It only stores the bare minimum to make the core functionality - managing / providing self-assignable roles - functional.\n\n**Data stored (user based)**\nExan will not store any user based information unless the user changes their language away from the default set language. The only data Exan will store in this case is the 2 letter code associated with the language chosen. To view the data stored about you or delete it, please check the help menu for the commands.\n\nIf you do not have a language selected, you may notice it returns your Discord UUID. If no other data is returned, this data is not stored in the database. This is simply all data available to the bot at the runtime of the command.\n\n**Data removal**\nFor users there is a simple command available to remove all the data stored about you. If you would like all data of a guild (the self-assignable roles, reacts & default language) to be removed, please contact me (bot creator/owner) on Github. https://github.com/Exanlv/Exan\n\n**Third party involvement**\nThis bot is hosted on a Scaleway VPS. Their privacy policy may apply.'
		}
	},
	reactions: {
		add_role: 'Added role with react',
		remove_role: 'Removed role with react',
		restore_role: 'Restored role'
	}
}