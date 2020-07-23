import { Client } from "eris";
import { Reaction } from "./classes/Reaction";
import { Translator } from "./classes/Translator";
import { ServerConfig } from "./classes/ServerConfig";

export async function handle_react_remove(react: Reaction, client: Client, translator: Translator) {
	const server_config = new ServerConfig(react.message.guild.id);

	if (!server_config.roles.reactions[react.message.channel.id] ||
		!server_config.roles.reactions[react.message.channel.id][react.message.id] ||
		!server_config.roles.reactions[react.message.channel.id][react.message.id][react.emoji.uid])
		return;

	const guild = client.guilds.find(g => g.id === react.message.guild.id);

	const role = guild.roles.find(
		r => r.id === server_config.roles.reactions[react.message.channel.id][react.message.id][react.emoji.uid]
	);

	if (react.user_id === client.user.id || !role) {
		delete server_config.roles.reactions[react.message.channel.id][react.message.id][react.emoji.uid];
		server_config.save();
		return;
	}

	try {
		await client.removeGuildMemberRole(guild.id, react.user_id, role.id, translator.trans(server_config.lang, 'reactions.remove_role'));
	} catch(e) { }
}