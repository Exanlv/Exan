import { BaseCommand } from "./_BaseCommand";

export class PrefixCommand extends BaseCommand {
	public async handle(): Promise<void> {
		await this.reply(this.trans('commands.prefix.current_prefix', {prefix: this.server_config.prefix}));
	}
}