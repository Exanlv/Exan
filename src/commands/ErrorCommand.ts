import { BaseCommand } from "./_BaseCommand";
import { Message, Client } from "eris";
import { ServerConfig } from "../classes/ServerConfig";
import { Translator } from "../classes/Translator";

export class ErrorCommand extends BaseCommand {
	protected error: string;
	
	constructor(
		message: Message,
		client: Client,
		server_config: ServerConfig,
		args: string[],
		translator: Translator,
		error: string
	) {
		super(
			message,
			client,
			server_config,
			args,
			translator
		);

		this.error = error;
	}

	public async handle(): Promise<void> {
		if (this.server_config.dev)
			this.reply(this.trans('commands.error.internal_error_with_error', {error: this.error}));
		
		this.reply(this.trans('commands.error.internal_error'));
	}
}