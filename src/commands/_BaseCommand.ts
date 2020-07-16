import { Message, Client, TextableChannel, Guild } from "eris";
import { ServerConfig } from "../classes/ServerConfig";
import { time } from "console";

export class BaseCommand {
	protected message: Message;
	protected client: Client;
	protected server_config: ServerConfig;
	protected args: string[];
	
	constructor(
		message: Message,
		client: Client,
		server_config: ServerConfig,
		args: string[]
	) {
		this.message = message;
		this.client = client;
		this.server_config = server_config;
		this.args = args;
	}

	protected get guild(): Guild {
		return this.client.guilds.find(g => g.id === this.message.guildID);
	}

	public async handle(): Promise<void> {
		await this.reply('This command hasn\'t been implemented yet!');
	}

	public async handle_help(): Promise<void> {
		await this.reply('No additional help available');
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

	protected async await_response(timeout: number = 30000, filter?: (message: Message) => boolean): Promise<Message> {
		const filter_function = filter ?? ((message: Message) => {
			return (
				message.member &&
				message.member.id === this.message.member.id &&
				message.channel.id === this.message.channel.id
			);
		});
		
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				this.client.removeListener('messageCreate', event_handler);
				
				reject();
			}, timeout);

			const event_handler = (message: Message) => {
				if (filter_function(message)) {
					this.client.removeListener('messageCreate', event_handler);

					resolve(message);
				}
			}

			this.client.on('messageCreate', event_handler);
		});
	}

	protected async get_reply(q: string, timeout: number = 30000): Promise<string> {
		try {
			const q_message = await this.reply(q);

			const response = await this.await_response(timeout);

			try {
				await q_message.delete();
				await response.delete();
			} catch (e) { }

			return response.content;
		} catch (e) {
			console.log(e);

			return;
		}
	}
}