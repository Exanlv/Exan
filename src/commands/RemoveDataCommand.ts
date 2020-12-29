import { BaseCommand } from "./_BaseCommand";

export class RemoveDataCommand extends BaseCommand {
	public async handle(): Promise<void> {
		await this.user_config.delete();

		await this.reply(this.trans('commands.remove_data.success'));
	}
}