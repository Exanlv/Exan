import { Client } from "eris";
import { Reaction } from "./classes/Reaction";
import { ServerConfig } from "./classes/ServerConfig";
import { Translator } from "./classes/Translator";
import { MongoDB } from "./classes/MongoDB";

export async function handle_react_add(react: Reaction, client: Client, translator: Translator, mongo_db: MongoDB) {
	const server_config = new ServerConfig(react.message.guild.id, mongo_db);
	await server_config.load();

	if (!server_config.roles.reactions[react.message.channel.id] ||
		!server_config.roles.reactions[react.message.channel.id][react.message.id] ||
		!server_config.roles.reactions[react.message.channel.id][react.message.id][react.emoji.uid])
		return;

	const guild = client.guilds.find(g => g.id === react.message.guild.id);

	const role = guild.roles.find(
		r => r.id === server_config.roles.reactions[react.message.channel.id][react.message.id][react.emoji.uid]
	);

	if (!role) {
		delete server_config.roles.reactions[react.message.channel.id][react.message.id][react.emoji.uid];
		server_config.save();
	}

	try {
		await client.addGuildMemberRole(guild.id, react.user_id, role.id, translator.trans(server_config.lang, 'reactions.add_role'));
	} catch(e) { }
}