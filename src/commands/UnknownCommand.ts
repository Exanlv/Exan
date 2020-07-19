import { BaseCommand } from "./_BaseCommand";

export class UnknownCommand extends BaseCommand {
	public async handle(): Promise<void> {
		await this.reply(this.trans('commands.unknown_command.unknown_command_use_help', {help_command: `${this.server_config.prefix}help`}));
	}
}