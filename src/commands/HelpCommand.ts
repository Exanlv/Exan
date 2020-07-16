import { BaseCommand } from './_BaseCommand';
import { COMMANDS } from '../conf/commands';

export class HelpCommand extends BaseCommand {
	public async handle(): Promise<void> {
		let message = 'Available commands: \n\n';
		
		for (let i in COMMANDS) {
			message += `${this.server_config.prefix}${COMMANDS[i].trigger} - ${COMMANDS[i].description ?? 'No description available'}\n`;
		}

		await this.reply(message);
	}
}