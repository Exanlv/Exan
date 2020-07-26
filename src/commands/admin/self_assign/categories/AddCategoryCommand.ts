import { BaseCommand } from "../../../_BaseCommand";
import { LIMTIS } from "../../../../../conf/limits";

export class AddCategoryCommand extends BaseCommand {
	public async handle(): Promise<void> {
		if (this.server_config.roles.categories.length === LIMTIS.CATEGORY.AMOUNT_TOTAL) {
			await this.reply(
				this.trans(
					'commands.add_category.limit_reached',
					{
						limit: String(LIMTIS.CATEGORY.AMOUNT_TOTAL)
					}
				)
			);
			
			return;
		}

		const category_name = this.args.length > 3 ? this.args.slice(3).join(' ') : await this.get_reply(this.trans('commands.add_category.enter_name'));

		if (!category_name) {
			await this.reply(this.trans('commands.add_category.no_name'));
			return;
		}

		if (category_name.length > LIMTIS.CATEGORY.NAME_LENGTH) {
			await this.reply(
				this.trans(
					'commands.add_category.category_already_exists',
					{
						limit: String(LIMTIS.CATEGORY.NAME_LENGTH)
					}
				)
			);

			return;
		}

		if (this.server_config.roles.categories.find(c => c.name.toLowerCase() === category_name.toLowerCase())) {
			await this.reply(this.trans('commands.add_category.category_already_exists'));
			return;
		}

		this.server_config.roles.categories.push({
			name: category_name,
			roles: []
		});

		await this.server_config.save();

		await this.mark_handled();
	}

	public async handle_help(): Promise<void> {
		await this.reply(this.trans('commands.add_category.help'));
	}
}