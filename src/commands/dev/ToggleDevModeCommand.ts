import { BaseAdminCommand } from "../admin/_BaseAdminCommand";

export class ToggleDevModeCommand extends BaseAdminCommand {
	public async handle(): Promise<void> {
		this.server_config.dev = !this.server_config.dev;
		await this.server_config.save();

		await this.mark_handled();
	}
}