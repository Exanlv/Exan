import { BaseCommand } from "../../../_BaseCommand";

export class RemoveRoleFromCategoryCommand extends BaseCommand {
	public async handle(): Promise<void> {
		const category_name = await this.get_reply('> Enter a name for the category');

		if (!category_name) {
			await this.reply('No category name was entered');
			return;
		}

		if (!this.server_config.roles.categories.find(c => c.name.toLowerCase() === category_name.toLowerCase())) {
			await this.reply('Category does not exist');
			return;
		}

		const role_name = await (await this.get_reply('> Enter a role') || '').toLowerCase();

		if (!role_name) {
			await this.reply('No role was entered');
			return;
		}

		const role = this.guild.roles.find(r => r.name.toLowerCase() === role_name);

		if (!role) {
			await this.reply('Invalid role');
			return;
		}

		const category = this.server_config.roles.categories.find(c => c.name.toLowerCase() === category_name.toLowerCase());

		if (!category.roles.includes(role.id)) {
			await this.reply('Role is not in category');
			return;
		}

		category.roles.splice(category.roles.indexOf(role.id), 1);

		this.server_config.save();

		await this.mark_handled();
	}
}