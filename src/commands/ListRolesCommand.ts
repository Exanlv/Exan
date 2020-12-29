import { BaseCommand } from "./_BaseCommand";
import { first_letter_uppercase } from "../functions/first_letter_uppercase";

export class ListRolesCommand extends BaseCommand {
	private role_names: {[id: string]: string} = {};

	private embed = {
		title: this.trans(
			'commands.list_role.available_roles_for_guild',
			{ guild_name: this.guild.name }
		),
		type: 'rich',
		fields: []
	};

	public async handle(): Promise<void> {
		if (this.server_config.roles.roles.length === 0) {
			await this.reply(this.trans('commands.list_role.no_self_assignable_roles'));
			return;
		}

		for (let i in this.server_config.roles.roles) {
			const role = this.guild.roles.find(r => r.id === this.server_config.roles.roles[i]);

			if (role)
				this.role_names[role.id] = role.name;
		}

		this[this.server_config.roles.categories.length > 0 ? 'with_categories' : 'without_categories']();

		await this.reply({embed: this.embed});
	}

	private with_categories() {
		const no_category = this.trans('commands.list_role.no_category');

		const categories: {[category_name: string]: string[]} = {};
		categories[no_category] = [];

		const roles_in_category: Array<string> = [];

		for (let i in this.server_config.roles.categories) {
			if (!this.server_config.roles.categories[i].roles.length)
				continue;
			
			if (!categories[this.server_config.roles.categories[i].name])
				categories[this.server_config.roles.categories[i].name] = [];

			this.server_config.roles.categories[i].roles.forEach((role) => {
				if (!roles_in_category.includes(role)) {
					roles_in_category.push(role);
				}

				categories[this.server_config.roles.categories[i].name].push(this.role_names[role]);
			});
		}

		for (let i in this.role_names)
			if (!roles_in_category.includes(i))
				categories[no_category].push(this.role_names[i]);

		if (categories[no_category].length === 0)
			delete categories[no_category];

		for (let i in categories) {
			this.embed.fields.push({
				name: i,
				value: categories[i].join('\n')
			});
		}
	}

	private without_categories() {
		this.embed.fields.push({
			name: this.trans('commands.list_role.roles'),
			value: Object.values(this.role_names).join('\n')
		});
	}
}