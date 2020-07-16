import { BaseCommand } from "../../../_BaseCommand";
import { LIMTIS } from "../../../../conf/limits";

export class AddRoleToCategoryCommand extends BaseCommand {
	public async handle(): Promise<void> {
		const category_name = await this.get_reply('> Enter a name for the category');

		if (!category_name) {
			await this.reply('No category name was entered');
			return;
		}

		const category = this.server_config.roles.categories.find(c => c.name.toLowerCase() === category_name.toLowerCase());

		if (category.roles.length === LIMTIS.CATEGORY.AMOUNT_ROLES) {
			await this.reply(`You can only have ${LIMTIS.CATEGORY.AMOUNT_ROLES} roles per category`);
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

		if (!this.server_config.roles.roles.includes(role.id)) {
			await this.reply('Role is not self-assignable');
			return;
		}

		if (category.roles.includes(role.id)) {
			await this.reply('Role is already in category');
			return;
		}

		category.roles.push(role.id);

		this.server_config.save();

		await this.mark_handled();
	}
}