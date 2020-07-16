import { BaseCommand } from "./_BaseCommand";

export class PrefixCommand extends BaseCommand {
	public async handle(): Promise<void> {
		await this.reply(`The prefix used for the current guild is \`${this.server_config.prefix}\``);
	}
}