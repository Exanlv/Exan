import { BaseCommand } from "./_BaseCommand";
import { Message, Client } from "eris";
import { ServerConfig } from "../classes/ServerConfig";

export class ErrorCommand extends BaseCommand {
	protected error: string;
	
	constructor(
		message: Message,
		client: Client,
		server_config: ServerConfig,
		args: string[],
		error: string
	) {
		super(
			message,
			client,
			server_config,
			args
		);

		this.error = error;
	}

	public async handle(): Promise<void> {
		await this.reply(
			this.server_config.dev ?
				`Internal error \`${this.error}\``
			:
				`Internal error`
		);
	}
}