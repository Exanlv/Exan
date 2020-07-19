import { BaseCommand } from './_BaseCommand';
import { COMMANDS } from '../../conf/commands';

export class HelpCommand extends BaseCommand {
	public async handle(): Promise<void> {
		let message = `${this.trans('commands.help.available_commands')}\n\n`;
		
		for (let i in COMMANDS) {
			message += `${this.server_config.prefix}${COMMANDS[i].trigger} - ${COMMANDS[i].description ?? this.trans('commands.help.no_description')}\n`;
		}

		await this.reply(message);
	}
}