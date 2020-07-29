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
			await this.reply(this.trans('commands.add_role_to_category.category_does_not_exist', {category: category_name}));
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

		const role_names = role_name.endsWith(' -a') ? role_name.substr(0, role_name.length - 3).split(',').map(n => n.trim()) : [role_name];

		let require_save = false;

		for (let i in role_names) {
			const role = this.guild.roles.find(r => r.name.toLowerCase() === role_names[i]);

			if (!role) {
				await this.reply(this.trans('commands.add_role_to_category.invalid_role', {role: role_names[i]}));
				continue;
			}

			if (!this.server_config.roles.roles.includes(role.id)) {
				await this.reply(this.trans('commands.add_role_to_category.role_not_self_assignable', {role: role.name}));
				continue;
			}

			if (category.roles.includes(role.id)) {
				await this.reply(this.trans('commands.add_role_to_category.role_already_in_category', {role: role.name, category: category.name}));
				continue;
			}

			category.roles.push(role.id);

			require_save = true;
		}

		
		if (!require_save)
			return;

		await this.server_config.save();

		await this.mark_handled();
	}

	public async handle_help(): Promise<void> {
		await this.reply(this.trans('commands.add_role_to_category.help'));
	}
}