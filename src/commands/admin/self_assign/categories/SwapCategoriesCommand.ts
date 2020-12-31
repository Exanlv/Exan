import { BaseAdminCommand } from "../../_BaseAdminCommand";

export class SwapCategoriesCommand extends BaseAdminCommand {
	public async handle(): Promise<void> {
		const category_1_name = ((
				await this.get_reply(
					this.trans('commands.swap_categories.enter_category_1')
				)
			) || '').toLowerCase();

		if (!category_1_name) {
			await this.reply(
				this.trans('commands.swap_categories.no_category_1')
			);
			return;
		}

		const category_1 = this.server_config.roles.categories.findIndex(c => c.name.toLowerCase() === category_1_name);

		if (category_1 === -1) {
			await this.reply(
				this.trans('commands.swap_categories.invalid_category_1', {category: category_1_name})
			);
			return;
		}

		const category_2_name = ((await this.get_reply('commands.swap_categories.enter_category_2')) || '').toLowerCase();

		if (!category_2_name) {
			await this.reply(
				this.trans('commands.swap_categories.no_category_2')
			);
			return;
		}

		const category_2 = this.server_config.roles.categories.findIndex(c => c.name.toLowerCase() === category_2_name);

		if (category_2 === -1) {
			await this.reply(
				this.trans('commands.swap_categories.invalid_category_2', {category: category_2_name})
			);
			return;
		}

		if (category_1 === category_2) {
			await this.reply(
				this.trans('commands.swap_categories.enter_different_categories')
			);
			return;
		}

		[
			this.server_config.roles.categories[category_1],
			this.server_config.roles.categories[category_2]
		] = [
			this.server_config.roles.categories[category_2],
			this.server_config.roles.categories[category_1]
		];

		this.server_config.save();
	}

	public async handle_help(): Promise<void> {
		await this.reply(this.trans('commands.swap_categories.help'));
	}
}