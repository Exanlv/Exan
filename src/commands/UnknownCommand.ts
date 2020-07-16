import { BaseCommand } from "./_BaseCommand";

export class UnknownCommand extends BaseCommand {
	public async handle(): Promise<void> {
		await this.reply(`Unknown command! Use ${this.server_config.prefix}help for a list of commands!`);
	}
}