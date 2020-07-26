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
import { RemoveReactionRoleCommand } from "../src/commands/admin/self_assign/reactions/RemoveReactionRoleCommand";
import { ListReactionRolesCommand } from "../src/commands/admin/self_assign/reactions/ListReactionRolesCommand";
import { ListDataCommand } from "../src/commands/ListDataCommand";
import { RemoveDataCommand } from "../src/commands/RemoveDataCommand";
import { BaseAdminCommand } from "../src/commands/admin/_BaseAdminCommand";
import { SwapCategoriesCommand } from "../src/commands/admin/self_assign/categories/SwapCategoriesCommand";
import { SwapRolesCommand } from "../src/commands/admin/self_assign/roles/SwapRolesCommand";

export const COMMANDS: Command[] = [
	{
		trigger: 'help',
		class: HelpCommand,
		description: 'help'
	},
	{
		trigger: 'prefix',
		class: PrefixCommand,
		description: 'prefix',
		sub_commands: [
			{
				trigger: 'set',
				class: SetPrefixCommand,
				description: 'set_prefix'
			}
		]
	},
	{
		trigger: 'dev',
		class: ListDevModeCommand,
		description: 'dev',
		sub_commands: [
			{
				trigger: 'toggle',
				class: ToggleDevModeCommand,
				description: 'toggle_dev',
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
		class: BaseAdminCommand,
		description: 'self_assign',
		sub_commands: [
			{
				trigger: 'role',
				class: BaseAdminCommand,
				description: 'self_assign_roles',
				sub_commands: [
					{
						trigger: 'add',
						class: AddSelfAssignableRole,
						description: 'self_assign_roles_add',
					},
					{
						trigger: 'remove',
						class: RemoveSelfAssignableRole,
						description: 'self_assign_roles_remove',
					},
					{
						trigger: 'swap',
						class: SwapRolesCommand,
						description: 'self_assign_roles_swap'
					}
				]
			},
			{
				trigger: 'category',
				class: ListCategoriesCommand,
				description: 'self_assign_categories',
				sub_commands: [
					{
						trigger: 'add',
						class: AddCategoryCommand,
						description: 'self_assign_categories_add'
					},
					{		
						trigger: 'list',
						class: ListCategoriesCommand,
						description: 'self_assign_categories_list'
					},
					{
						trigger: 'swap',
						class: SwapCategoriesCommand,
						description: 'self_assign_categories_swap'
					},
					{
						trigger: 'role',
						class: UnknownCommand,
						description: 'self_assign_categories_roles',
						sub_commands: [
							{
								trigger: 'add',
								class: AddRoleToCategoryCommand,
								description: 'self_assign_categories_roles_add',
							},
							{
								trigger: 'remove',
								class: RemoveRoleFromCategoryCommand,
								description: 'self_assign_categories_roles_remove',
							},
						]
					}
				]
			},
			{
				trigger: 'react',
				description: 'self_assign_react',
				class: UnknownCommand,
				sub_commands: [
					{
						trigger: 'add',
						class: AddReactionRoleCommand,
						description: 'self_assign_react_add'
					},
					{
						trigger: 'remove',
						class: RemoveReactionRoleCommand,
						description: 'self_assign_react_remove'
					},
					{
						trigger: 'list',
						class: ListReactionRolesCommand,
						description: 'self_assign_react_list'
					}
				]
			}
		]
	},
	{
		trigger: 'getrole',
		class: GetRoleCommand,
		description: 'get_role'
	},
	{
		trigger: 'removerole',
		class: RemoveRoleCommand,
		description: 'remove_role'
	},
	{
		trigger: 'roles',
		class: ListRolesCommand,
		description: 'list_roles',
	},
	{
		trigger: 'language',
		class: ListLanguageCommand,
		description: 'language',
		sub_commands: [
			{
				trigger: 'set',
				class: SetLanguageCommand,
				description: 'language_set',
			},
			{
				trigger: 'guild',
				class: ListLanguageCommand,
				description: 'language_guild',
				sub_commands: [
					{
						trigger: 'set',
						class: SetGuildLanguageCommand,
						description: 'language_guild_set'
					}
				]
			}
		]
	},
	{
		trigger: 'invite',
		class: InviteLinkCommand,
		description: 'invite'
	},
	{
		trigger: 'contribute',
		class: ContributeCommand,
		description: 'contribute'
	},
	{
		trigger: 'my-data',
		class: ListDataCommand,
		description: 'my_data',
		sub_commands: [
			{
				trigger: 'remove',
				class: RemoveDataCommand,
				description: 'my_data_remove'
			}
		]
	}
];