import { Command } from "../src/classes/Command";
import { HelpCommand } from "../src/commands/HelpCommand";
import { PrefixCommand } from "../src/commands/PrefixCommand";
import { SetPrefixCommand } from "../src/commands/admin/SetPrefixCommand";
import { ToggleDevModeCommand } from "../src/commands/dev/ToggleDevModeCommand";
import { ListDevModeCommand } from "../src/commands/dev/ListDevModeCommand";
import { UnknownCommand } from "../src/commands/UnknownCommand";
import { AddSelfAssignableRole } from "../src/commands/admin/self_assign/roles/AddSelfAssignableRole";
import { RemoveSelfAssignableRole } from "../src/commands/admin/self_assign/roles/RemoveSelfAssignableRole";
import { GetRoleCommand } from "../src/commands/GetRoleCommand";
import { RemoveRoleCommand } from "../src/commands/RemoveRoleCommand";
import { ListRolesCommand } from "../src/commands/ListRolesCommand";
import { AddCategoryCommand } from "../src/commands/admin/self_assign/categories/AddCategoryCommand";
import { AddRoleToCategoryCommand } from "../src/commands/admin/self_assign/categories/AddRoleToCategoryCommand";
import { RemoveRoleFromCategoryCommand } from "../src/commands/admin/self_assign/categories/RemoveRoleFromCategoryCommand";
import { ListCategoriesCommand } from "../src/commands/admin/self_assign/categories/ListCategoriesCommand";
import { SetGuildLanguageCommand } from "../src/commands/admin/SetGuildLanguageCommand";
import { ListLanguageCommand } from "../src/commands/ListLanguageCommand";
import { SetLanguageCommand } from "../src/commands/SetLanguageCommand";
import { EvalCommand } from "../src/commands/dev/EvalCommand";
import { InviteLinkCommand } from "../src/commands/InviteLinkCommand";
import { ContributeCommand } from "../src/commands/ContributeCommand";
import { AddReactionRoleCommand } from '../src/commands/admin/self_assign/reactions/AddReactionRoleCommand'

export const COMMANDS: Command[] = [
	{
		trigger: 'help',
		class: HelpCommand,
	},
	{
		trigger: 'prefix',
		class: PrefixCommand,
		description: 'Shows the prefix for the current guild',
		sub_commands: [
			{
				trigger: 'set',
				class: SetPrefixCommand,
			}
		]
	},
	{
		trigger: 'dev',
		class: ListDevModeCommand,
		description: 'List dev mode for the current guild',
		sub_commands: [
			{
				trigger: 'toggle',
				class: ToggleDevModeCommand,
				description: 'Toggle dev mode for the current guild',
			}
		]
	},
	{
		trigger: 'eval',
		class: EvalCommand,
		description: 'eval'
	},
	{
		trigger: 'self-assign',
		class: UnknownCommand,
		description: 'Manage self-assign for guild',
		sub_commands: [
			{
				trigger: 'role',
				class: UnknownCommand,
				description: 'Manage self-assignable roles',
				sub_commands: [
					{
						trigger: 'add',
						class: AddSelfAssignableRole,
						description: 'Add a self assignable role',
					},
					{
						trigger: 'remove',
						class: RemoveSelfAssignableRole,
						description: 'Remove a self assignable role',
					}
				]
			},
			{
				trigger: 'category',
				class: ListCategoriesCommand,
				description: 'Manage categories for self-assignable roles',
				sub_commands: [
					{
						trigger: 'add',
						class: AddCategoryCommand,
						description: 'Add category'
					},
					{		
						trigger: 'list',
						class: ListCategoriesCommand,
						description: 'List categories'
					},
					{
						trigger: 'role',
						class: UnknownCommand,
						description: 'Manage roles in categories',
						sub_commands: [
							{
								trigger: 'add',
								class: AddRoleToCategoryCommand,
								description: 'Add role to category',
							},
							{
								trigger: 'remove',
								class: RemoveRoleFromCategoryCommand,
								description: 'Remove role from category',
							}
						]
					}
				]
			},
			{
				trigger: 'react',
				class: UnknownCommand,
				sub_commands: [
					{
						trigger: 'add',
						class: AddReactionRoleCommand
					}
				]
			}
		]
	},
	{
		trigger: 'getrole',
		class: GetRoleCommand,
		description: 'Get a role'
	},
	{
		trigger: 'removerole',
		class: RemoveRoleCommand,
		description: 'Remove a role'
	},
	{
		trigger: 'roles',
		class: ListRolesCommand,
		description: 'List available roles',
	},
	{
		trigger: 'language',
		class: ListLanguageCommand,
		description: 'List available languages',
		sub_commands: [
			{
				trigger: 'set',
				class: SetLanguageCommand,
				description: 'Set prefered language',
			},
			{
				trigger: 'guild',
				class: ListLanguageCommand,
				description: 'List available languages',
				sub_commands: [
					{
						trigger: 'set',
						class: SetGuildLanguageCommand,
						description: 'Set default language for guild'
					}
				]
			}
		]
	},
	{
		trigger: 'invite',
		class: InviteLinkCommand,
		description: 'Invite link'
	},
	{
		trigger: 'contribute',
		class: ContributeCommand,
		description: 'Contribute'
	}
];