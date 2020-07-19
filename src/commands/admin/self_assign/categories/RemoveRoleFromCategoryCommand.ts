import { BaseCommand } from "../../../_BaseCommand";

export class RemoveRoleFromCategoryCommand extends BaseCommand {
	public async handle(): Promise<void> {
		const category_name = await this.get_reply(this.trans('commands.remove_role_from_category.enter_category'));

		if (!category_name) {
			await this.reply(this.trans('commands.remove_role_from_category.no_category'));
			return;
		}

		if (!this.server_config.roles.categories.find(c => c.name.toLowerCase() === category_name.toLowerCase())) {
			await this.reply(this.trans('commands.remove_role_from_category.category_does_not_exist'));
			return;
		}

		const role_name = await (await this.get_reply(this.trans('commands.remove_role_from_category.enter_role')) || '').toLowerCase();

		if (!role_name) {
			await this.reply(this.trans('commands.remove_role_from_category.no_role'));
			return;
		}

		const role = this.guild.roles.find(r => r.name.toLowerCase() === role_name);

		if (!role) {
			await this.reply(this.trans('commands.remove_role_from_category.invalid_role'));
			return;
		}

		const category = this.server_config.roles.categories.find(c => c.name.toLowerCase() === category_name.toLowerCase());

		if (!category.roles.includes(role.id)) {
			await this.reply(this.trans('commands.remove_role_from_category.role_not_in_category'));
			return;
		}

		category.roles.splice(category.roles.indexOf(role.id), 1);

		this.server_config.save();

		await this.mark_handled();
	}
}