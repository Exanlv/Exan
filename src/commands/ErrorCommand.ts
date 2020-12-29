import { BaseCommand } from "./_BaseCommand";
import { Message, Client } from "eris";
import { ServerConfig } from "../classes/ServerConfig";
import { Translator } from "../classes/Translator";
import { UserConfig } from "../classes/UserConfig";

export class ErrorCommand extends BaseCommand {
	protected error: string;
	
	constructor(
		message: Message,
		client: Client,
		server_config: ServerConfig,
		user_config: UserConfig,
		args: string[],
		translator: Translator,
		error: string
	) {
		super(
			message,
			client,
			server_config,
			user_config,
			args,
			translator
		);

		this.error = error;
	}

	public async handle(): Promise<void> {
		if (this.server_config.dev) {
			await this.reply(this.trans('commands.error.internal_error_with_error', {error: this.error}));
			return;
		}
		
		await this.reply(this.trans('commands.error.internal_error'));
	}
}