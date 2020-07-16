import { BaseCommand } from "../../../_BaseCommand";
import { LIMTIS } from "../../../../conf/limits";

export class AddCategoryCommand extends BaseCommand {
	public async handle(): Promise<void> {
		if (this.server_config.roles.categories.length === LIMTIS.CATEGORY.AMOUNT_TOTAL) {
			await this.reply(`You can only have ${LIMTIS.CATEGORY.AMOUNT_TOTAL} channels`);
			return;
		}

		const category_name = await this.get_reply('> Enter a name for the category');

		if (!category_name) {
			await this.reply('No category name was entered');
			return;
		}

		if (category_name.length > LIMTIS.CATEGORY.NAME_LENGTH) {
			await this.reply(`Category name can not be over ${LIMTIS.CATEGORY.NAME_LENGTH} characters`);
			return;
		}

		if (this.server_config.roles.categories.find(c => c.name.toLowerCase() === category_name.toLowerCase())) {
			await this.reply('Category already exists');
			return;
		}

		this.server_config.roles.categories.push({
			name: category_name,
			roles: []
		});

		this.server_config.save();

		await this.mark_handled();
	}	
}