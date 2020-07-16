import { BaseCommand } from "./_BaseCommand";

export class MissingPermissionsCommand extends BaseCommand {
	public async handle(): Promise<void> {
		await this.reply('You dont have the required permissions to use this command!');
	}
}