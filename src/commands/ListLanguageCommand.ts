import { BaseCommand } from "./_BaseCommand";
import { LANGUAGES, DEFAULT_LANGUAGE } from "../../conf/lang";

export class ListLanguageCommand extends BaseCommand {
	public async handle(): Promise<void> {
		await this.reply(
			this.trans(
				'commands.list_language.list',
				{
					current_server_language: LANGUAGES.find(l => l.lang_code === this.server_config.lang).name,
					current_user_language: this.user_config.lang ? LANGUAGES.find(l => l.lang_code === this.user_config.lang).name : this.trans('commands.list_language.none'),
					current_global_language: LANGUAGES.find(l => l.lang_code === DEFAULT_LANGUAGE).name,
					available_languages: LANGUAGES.map((l => l.lang_code + ' - ' + l.name)).join('\n'),
					user_command: `${this.server_config.prefix}language set`,
					guild_command: `${this.server_config.prefix}language guild set`
				}
			)
		);
	}
}