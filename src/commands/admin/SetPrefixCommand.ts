import { BaseAdminCommand } from "./_BaseAdminCommand";

export class SetPrefixCommand extends BaseAdminCommand {
	public async handle(): Promise<void> {
		const prefix_search = this.message.content.match(/(.*?)\[(.*)\](.*?)/);

		if (prefix_search === null) {
			await this.reply(
				`Put the desired prefix between square brackets, [like this], for more info run \`${this.server_config.prefix}set prefix --help\``
			);

			return;
		}

		const prefix = prefix_search[2];

		if (prefix.length > 32) {
			await this.reply('This prefix is too long, please use a prefix no longer than 32 characters');
			return;
		}

		this.server_config.prefix = prefix;

		this.server_config.save();

		await this.reply('Prefix set!');
	}

	public async handle_help(): Promise<void> {
		const prefix_search = this.message.content.match(/(.*?)\[(.*)\](.*?)/);

		if (prefix_search === null) {
			await this.reply(
				`With this command you can change the prefix used on the current guild. Provide the prefix you want to be used between square brackets when using the command.\nExample: \`${this.server_config.prefix}prefix set [--]\`, the new bot prefix would be \`--\``
			);

			return;
		}

		const prefix = prefix_search[2];

		await this.reply(`With this command you can change the prefix used on the current guild. Provide the prefix you want to be used between square brackets when using the command. By removing the --help suffix, you would change the bot prefix to \`${prefix}\``);
	
		if (prefix.length > 32) {
			await this.reply('Please note the prefix can not be over 32 characters');
		}
	}
}