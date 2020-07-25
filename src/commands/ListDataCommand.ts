import { BaseCommand } from "./_BaseCommand";

export class ListDataCommand extends BaseCommand {
	public async handle(): Promise<void> {
		const data = this.user_config.to_json();

		this.reply(
			this.trans(
				'commands.list_data.list_data',
				{
					data : data,
					command: `${this.server_config.prefix}my-data remove`
				}
			)
		);
	}
}