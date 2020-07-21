import { Message, Client } from "eris";
import { handle_command } from "./handle_command";
import { COMMANDS } from "../conf/commands";
import { UnknownCommand } from "./commands/UnknownCommand";
import { Translator } from "./classes/Translator";
import { ServerConfig } from "./classes/ServerConfig";
import { ErrorCommand } from "./commands/ErrorCommand";
import { MissingPermissionsCommand } from "./commands/MissingPermissionsCommand";

export async function handle_message(message: Message, client: Client, translator: Translator) {
	if (!message.guildID || !message.member)
		return;

	const server_config = new ServerConfig(message.guildID);

	const prefixes = [
		server_config.prefix,
		`<@${client.user.id}> `,
		`<@!${client.user.id}> `
	];

	let args;

	const message_content = message.content.toLowerCase();

	for (let i in prefixes)
		if (message_content.startsWith(prefixes[i]))
			args = message_content.substr(prefixes[i].length).split(' ');

	if (!args)
		return;

	const command = new ((handle_command(args, COMMANDS) ?? UnknownCommand))(message, client, server_config, args, translator);

	if (!await command.has_permissions()) {
		(new MissingPermissionsCommand(message, client, server_config, args, translator)).handle().catch((e) => {
			console.log(e);

			(new ErrorCommand(message, client, server_config, args, translator, e)).handle().catch((e) => { console.log(e); });
		});
	} else {
		command[args[args.length - 1] === '--help' ? 'handle_help' : 'handle']().catch((e) => {
			console.log(e);

			(new ErrorCommand(message, client, server_config, args, translator, e)).handle().catch((e) => { console.log(e); });
		});
	}
}