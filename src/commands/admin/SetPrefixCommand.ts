import { BaseAdminCommand } from "./_BaseAdminCommand";

export class SetPrefixCommand extends BaseAdminCommand {
	public async handle(): Promise<void> {
		const prefix_search = this.message.content.match(/(.*?)\[(.*)\](.*?)/);

		if (prefix_search === null) {
			await this.reply(
				this.trans(
					'commands.set_prefix.no_prefix',
					{
						command: `${this.server_config.prefix}set prefix --help`
					}
				)
			);

			return;
		}

		const prefix = prefix_search[2];

		if (prefix.length > 32) {
			await this.reply(this.trans('commands.set_prefix.prefix_too_long'));
			return;
		}

		this.server_config.prefix = prefix;

		await this.server_config.save();

		await this.reply(this.trans('commands.set_prefix.prefix_set'));
	}

	public async handle_help(): Promise<void> {
		const prefix_search = this.message.content.match(/(.*?)\[(.*)\](.*?)/);

		if (prefix_search === null) {
			await this.reply(
				this.trans(
					'commands.set_prefix.help_example',
					{
						command: `${this.server_config.prefix}prefix set`
					}
				)
			);

			return;
		}

		const prefix = prefix_search[2];

		await this.reply(
			this.trans(
				'commands.set_prefix.help_show_prefix',
				{
					prefix: prefix
				}
			)
		);
	
		if (prefix.length > 32) {
			await this.reply(this.trans('commands.set_prefix.help_length_notice'));
		}
	}
}