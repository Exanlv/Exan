import { BaseAdminCommand } from "../../_BaseAdminCommand";

export class ListCategoriesCommand extends BaseAdminCommand {
	public async handle(): Promise<void> {
		this.reply(this.server_config.roles.categories.length === 0 ? 'No categories' : {
			embed: {
				title: `Categories for ${this.guild.name}`,
				type: 'rich',
				fields: [
					{
						name: 'Categories',
						value: this.server_config.roles.categories.map(c => c.name).join('\n')
					}
				]
			}
		})
	}
}