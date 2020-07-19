import { BaseCommand } from "./_BaseCommand";

export class MissingPermissionsCommand extends BaseCommand {
	public async handle(): Promise<void> {
		await this.reply(this.trans('commands.missing_permissions.missing_permissions'));
	}
}