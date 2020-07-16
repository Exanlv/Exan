import { BaseAdminCommand } from "../admin/_BaseAdminCommand";

export class ListDevModeCommand extends BaseAdminCommand {
	public async handle(): Promise<void> {
		await this.reply(`Dev mode for this guild is currently \`${String(this.server_config.dev)}\``);
	}
}