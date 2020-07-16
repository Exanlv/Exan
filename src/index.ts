import * as Eris from 'eris';
import { ServerConfig } from './classes/ServerConfig';
import { handle_command } from './handle_command';
import { COMMANDS } from './conf/commands';
import { UnknownCommand } from './commands/UnknownCommand';
import { MissingPermissionsCommand } from './commands/MissingPermissionsCommand';
import { ErrorCommand } from './commands/ErrorCommand';
import { readFileSync } from 'fs';

const bot = Eris(readFileSync('.token').toString().trim());

const server_configs: {[guild_id: string]: ServerConfig} = {};

bot.on('ready', () => {
	console.log('ready');
});


bot.on('messageCreate', async (msg: Eris.Message) => {
	if (!msg.guildID || !msg.member)
		return;

	if (!server_configs[msg.guildID])
		server_configs[msg.guildID] = new ServerConfig(msg.guildID);

	const prefixes = [
		server_configs[msg.guildID].prefix,
		`<@${bot.user.id}> `,
		`<@!${bot.user.id}> `
	];

	let args;

	const message_content = msg.content.toLowerCase();

	for (let i in prefixes)
		if (message_content.startsWith(prefixes[i]))
			args = message_content.substr(prefixes[i].length).split(' ');

	if (!args)
		return;

	const command = new ((handle_command(args, COMMANDS) ?? UnknownCommand))(msg, bot, server_configs[msg.guildID], args);

	if (!await command.has_permissions()) {
		(new MissingPermissionsCommand(msg, bot, server_configs[msg.guildID], args)).handle().catch((e) => {
			console.log(e);

			(new ErrorCommand(msg, bot, server_configs[msg.guildID], args, e)).handle().catch((e) => { console.log(e); });
		});
	} else {
		command[args[args.length - 1] === '--help' ? 'handle_help' : 'handle']().catch((e) => {
			console.log(e);

			(new ErrorCommand(msg, bot, server_configs[msg.guildID], args, e)).handle().catch((e) => { console.log(e); });
		});
	}
});

bot.connect();