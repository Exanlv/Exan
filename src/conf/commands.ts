import { Command } from "../classes/Command";
import { HelpCommand } from "../commands/HelpCommand";
import { PrefixCommand } from "../commands/PrefixCommand";
import { SetPrefixCommand } from "../commands/admin/SetPrefixCommand";
import { ToggleDevModeCommand } from "../commands/dev/ToggleDevModeCommand";
import { ListDevModeCommand } from "../commands/dev/ListDevModeCommand";
import { UnknownCommand } from "../commands/UnknownCommand";
import { AddSelfAssignableRole } from "../commands/admin/self_assign/roles/AddSelfAssignableRole";
import { RemoveSelfAssignableRole } from "../commands/admin/self_assign/roles/RemoveSelfAssignableRole";
import { GetRoleCommand } from "../commands/GetRoleCommand";
import { RemoveRoleCommand } from "../commands/RemoveRoleCommand";
import { ListRolesCommand } from "../commands/ListRolesCommand";
import { AddCategoryCommand } from "../commands/admin/self_assign/categories/AddCategoryCommand";
import { AddRoleToCategoryCommand } from "../commands/admin/self_assign/categories/AddRoleToCategoryCommand";
import { RemoveRoleFromCategoryCommand } from "../commands/admin/self_assign/categories/RemoveRoleFromCategoryCommand";
import { ListCategoriesCommand } from "../commands/admin/self_assign/categories/ListCategoriesCommand";

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
	}
];