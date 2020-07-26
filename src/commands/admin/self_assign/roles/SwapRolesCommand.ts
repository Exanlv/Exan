import { BaseAdminCommand } from "../../_BaseAdminCommand";

export class SwapRolesCommand extends BaseAdminCommand {
	public async handle(): Promise<void> {
		const role_name_1 = ((await this.get_reply('commands.swap_roles.enter_role_1')) || '').toLowerCase();

		if (!role_name_1) {
			await this.reply(this.trans('commands.swap_roles.no_role_1'));
			return;
		}

		const role_1 = this.guild.roles.find(r => r.name.toLowerCase() === role_name_1);

		if (!role_1) {
			await this.reply(this.trans('commands.swap_roles.invalid_role_1'));
			return;
		}

		if (!this.server_config.roles.roles.includes(role_1.id)) {
			await this.reply(this.trans('commands.swap_roles.role_1_not_self_assignable'));
			return;
		}

		const role_name_2 = ((await this.get_reply('commands.swap_roles.enter_role_2')) || '').toLowerCase();

		if (!role_name_2) {
			await this.reply(this.trans('commands.swap_roles.no_role_2'));
			return;
		}

		const role_2 = this.guild.roles.find(r => r.name.toLowerCase() === role_name_2);

		if (!role_2) {
			await this.reply(this.trans('commands.swap_roles.invalid_role_2'));
			return;
		}

		if (!this.server_config.roles.roles.includes(role_2.id)) {
			await this.reply(this.trans('commands.swap_roles.role_2_not_self_assignable'));
			return;
		}

		if (role_1.id === role_2.id) {
			await this.reply(this.trans('commands.swap_roles.enter_different_roles'));
			return;
		}

		if (this.server_config.roles.categories.length) {
			const category_name = ((await this.get_reply(this.trans('commands.swap_roles.enter_category_or_none'))) || '').toLowerCase();
			if (category_name !== 'none') {
				const category = this.server_config.roles.categories.find(c => c.name.toLowerCase() === category_name);

				if (!category) {
					await this.reply(this.trans('commands.swap_roles.invalid_category'));
					return;
				}

				if (!category.roles.includes(role_1.id) || !category.roles.includes(role_2.id)) {
					await this.reply(this.trans('commands.swap_roles.invalid_category'));
					return;
				}

				const index_1 = category.roles.indexOf(role_1.id);
				const index_2 = category.roles.indexOf(role_2.id);

				[
					category.roles[index_1],
					category.roles[index_2]
				] = [
					category.roles[index_2],
					category.roles[index_1],
				];

				this.server_config.save();

				await this.reply(this.trans('commands.swap_roles.success'));
				return;
			}
		}

		const index_1 = this.server_config.roles.roles.indexOf(role_1.id);
		const index_2 = this.server_config.roles.roles.indexOf(role_2.id);

		[
			this.server_config.roles.roles[index_1],
			this.server_config.roles.roles[index_2],
		] = [
			this.server_config.roles.roles[index_2],
			this.server_config.roles.roles[index_1],
		];

		this.server_config.save();

		await this.reply(this.trans('commands.swap_roles.success'));
	}
}