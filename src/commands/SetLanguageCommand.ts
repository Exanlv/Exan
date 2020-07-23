import { BaseCommand } from "./_BaseCommand";
import { LANGUAGES } from "../../conf/lang";

export class SetLanguageCommand extends BaseCommand {
	public async handle(): Promise<void> {
		const lang = this.args.length >= 3 ?
			this.args.splice(2, this.args.length - 1).join(' ')
				:
			await this.get_reply(this.trans('commands.set_language.enter_language'))
		;

		if (!lang) {
			await this.reply(this.trans('commands.set_language.no_language'));
			return;
		}

		if (lang === 'none') {
			delete this.user_config.lang;
		} else {
			const language = LANGUAGES.find(l => l.name.toLowerCase() === lang.toLowerCase() || l.lang_code === lang.toLowerCase());

			if (!language) {
				await this.reply(this.trans('commands.set_language.invalid_language'));
				return;
			}
	
			this.user_config.lang = language.lang_code;
		}
		
		await this.user_config.save();

		await this.reply(this.trans('commands.set_language.language_set'));
	}
}