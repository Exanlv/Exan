import { Message, Client, TextableChannel, Guild } from "eris";
import { ServerConfig } from "../../classes/ServerConfig";
import { Translator } from "../../classes/Translator";
import { UserConfig } from "../../classes/UserConfig";

export class BaseCommand {
	protected message: Message;
	protected client: Client;
	protected server_config: ServerConfig;
	protected args: string[];
	protected translator: Translator;
	protected user_config: UserConfig;
	
	constructor(
		message: Message,
		client: Client,
		server_config: ServerConfig,
		user_config: UserConfig,
		args: string[],
		translator: Translator
	) {
		this.message = message;
		this.client = client;
		this.server_config = server_config;
		this.user_config = user_config;
		this.args = args;
		this.translator = translator;
	}

	protected get guild(): Guild {
		return this.client.guilds.find(g => g.id === this.message.guildID);
	}

	public async handle(): Promise<void> {
		return;
	}

	public async handle_help(): Promise<void> {
		await this.reply(this.trans('commands.base.no_additional_help'));
	}

	public async has_permissions(): Promise<boolean> {
		return true;
	}

	protected async reply(message: string|object): Promise<Message<TextableChannel>> {
		try {
			return await this.client.createMessage(this.message.channel.id, message);
		} catch (e) {
			
		}
	}

	protected async mark_handled(): Promise<void> {
		return await this.message.addReaction('👍');
	}

	protected trans(key: string, data?: {[key: string]: string}, server_language: boolean = false) {
		const lang = server_language ? this.server_config.lang : this.user_config.lang ?? this.server_config.lang;

		return this.translator.trans(lang, key, data);
	}
}