import { BaseAdminCommand } from "./_BaseAdminCommand";
import { LANGUAGES } from "../../../conf/lang";

export class SetGuildLanguageCommand extends BaseAdminCommand {
	public async handle(): Promise<void> {
		const lang = this.args.length >= 4 ?
			this.args.splice(3, this.args.length - 1).join(' ')
				:
			await this.get_reply(this.trans('commands.set_guild_language.enter_language'))
		;

		if (!lang) {
			await this.reply(this.trans('commands.set_guild_language.no_language'));
			return;
		}

		const language = LANGUAGES.find(l => l.name.toLowerCase() === lang.toLowerCase() || l.lang_code === lang.toLowerCase());

		if (!language) {
			await this.reply(this.trans('commands.set_guild_language.invalid_language'));
			return;
		}

		this.server_config.lang = language.lang_code;
		await this.server_config.save();

		await this.reply(this.trans('commands.set_guild_language.language_set'));
	}

	public async handle_help(): Promise<void> {
		await this.reply(this.trans('commands.set_guild_language.help'));
	}
}