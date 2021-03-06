import { BaseAdminCommand } from "../../_BaseAdminCommand";
import { first_letter_uppercase } from "../../../../functions/first_letter_uppercase";

export class ListCategoriesCommand extends BaseAdminCommand {
	public async handle(): Promise<void> {
		await this.reply(this.server_config.roles.categories.length === 0 ? this.trans('commands.list_categories.no_categories') : {
			embed: {
				title: this.trans(
					'commands.list_categories.categories_for',
					{
						guild: this.guild.name
					}
				),
				type: 'rich',
				fields: [
					{
						name: this.trans('commands.list_categories.categories'),
						value: this.server_config.roles.categories.map(c => first_letter_uppercase(c.name)).join('\n')
					}
				]
			}
		});
	}
}