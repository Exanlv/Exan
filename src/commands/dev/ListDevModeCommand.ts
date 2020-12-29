import { BaseAdminCommand } from "../admin/_BaseAdminCommand";

export class ListDevModeCommand extends BaseAdminCommand {
	public async handle(): Promise<void> {
		await this.reply(
			this.trans(
				'commands.list_dev.list_dev',
				{
					mode: String(this.server_config.dev)
				}
			)
		);
	}
}