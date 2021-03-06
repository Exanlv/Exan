import { Message, Client } from "eris";
import { handle_command } from "./handle_command";
import { COMMANDS } from "../conf/commands";
import { UnknownCommand } from "./commands/UnknownCommand";
import { Translator } from "./classes/Translator";
import { ServerConfig } from "./classes/ServerConfig";
import { ErrorCommand } from "./commands/ErrorCommand";
import { MissingPermissionsCommand } from "./commands/MissingPermissionsCommand";
import { MongoDB } from "./classes/MongoDB";
import { UserConfig } from "./classes/UserConfig";

export async function handle_message(message: Message, client: Client, translator: Translator, mongo_db: MongoDB) {
	if (!message.guildID || !message.member)
		return;

	const server_config = new ServerConfig(message.guildID, mongo_db);
	await server_config.load();

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

	const user_config = new UserConfig(message.member.id, mongo_db);
	await user_config.load();

	const command_data = handle_command(args, COMMANDS);

	const command = new (command_data ? command_data.class : UnknownCommand)(message, client, server_config, user_config, args, translator);

	if (!await command.has_permissions()) {
		(new MissingPermissionsCommand(message, client, server_config, user_config,args, translator)).handle().catch((e) => {
			console.log(e);

			(new ErrorCommand(message, client, server_config, user_config, args, translator, e)).handle().catch((e) => { console.log('Error in running error command', e); });
		});
	} else {
		command[args[args.length - 1] === '--help' ? 'handle_help' : 'handle']().catch((e) => {
			console.log('Error in running command', e);

			(new ErrorCommand(message, client, server_config, user_config, args, translator, e)).handle().catch((e) => { console.log('Error in running error command', e); });
		});
	}
}