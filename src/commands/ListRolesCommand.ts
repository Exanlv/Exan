import { BaseCommand } from "./_BaseCommand";

export class ListRolesCommand extends BaseCommand {
	private role_names: {[id: string]: string} = {};

	private embed = {
		title: `Available roles for ${this.guild.name}`,
		type: 'rich',
		fields: []
	};

	public async handle(): Promise<void> {
		if (this.server_config.roles.roles.length === 0) {
			await this.reply('No self-assignable roles');
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
		const categories: {[category_name: string]: string[]} = {'No category': []};

		for (let i in this.server_config.roles.roles) {

			let in_category = false;

			for (let j in this.server_config.roles.categories) {
				if (this.server_config.roles.categories[j].roles.includes(this.server_config.roles.roles[i])) {
					if (!categories[this.server_config.roles.categories[j].name])
						categories[this.server_config.roles.categories[j].name] = [];

					categories[this.server_config.roles.categories[j].name].push(this.role_names[this.server_config.roles.roles[i]]);

					in_category = true;
				}
			}

			if (!in_category) {
				categories['No category'].push(this.role_names[this.server_config.roles.roles[i]]);
			}
		}

		if (categories['No category'].length === 0)
			delete categories['No category'];

		for (let i in categories) {
			this.embed.fields.push({
				name: i,
				value: categories[i].join('\n')
			});
		}
	}

	private without_categories() {
		this.embed.fields.push({
			name: 'Roles',
			value: Object.values(this.role_names).join('\n')
		});
	}
}