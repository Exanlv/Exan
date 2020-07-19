import { BaseCommand } from "../../../_BaseCommand";
import { LIMTIS } from "../../../../../conf/limits";

export class AddRoleToCategoryCommand extends BaseCommand {
	public async handle(): Promise<void> {
		const category_name = await this.get_reply(this.trans('commands.add_role_to_category.enter_category'));

		if (!category_name) {
			await this.reply(this.trans('commands.add_role_to_category.no_catgeory'));
			return;
		}

		const category = this.server_config.roles.categories.find(c => c.name.toLowerCase() === category_name.toLowerCase());

		if (!category) {
			await this.reply(this.trans('commands.add_role_to_category.category_does_not_exist'));
			return;
		}

		if (category.roles.length === LIMTIS.CATEGORY.AMOUNT_ROLES) {
			await this.reply(
				this.trans(
					'commands.add_role_to_category.too_many_roles_in_category',
					{
						limit: String(LIMTIS.CATEGORY.AMOUNT_ROLES)
					}
				)
			);
			
			return;
		}


		const role_name = await (await this.get_reply(this.trans('commands.add_role_to_category.enter_role')) || '').toLowerCase();

		if (!role_name) {
			await this.reply(this.trans('commands.add_role_to_category.no_role'));
			return;
		}

		const role = this.guild.roles.find(r => r.name.toLowerCase() === role_name);

		if (!role) {
			await this.reply(this.trans('commands.add_role_to_category.invalid_role'));
			return;
		}

		if (!this.server_config.roles.roles.includes(role.id)) {
			await this.reply(this.trans('commands.add_role_to_category.role_not_self_assignable'));
			return;
		}

		if (category.roles.includes(role.id)) {
			await this.reply(this.trans('commands.add_role_to_category.role_already_in_category'));
			return;
		}

		category.roles.push(role.id);

		this.server_config.save();

		await this.mark_handled();
	}
}