import { Client, Emoji, PossiblyUncachedMessage } from "eris";
import { ServerConfig } from "./classes/ServerConfig";
import { Translator } from "./classes/Translator";
import { MongoDB } from "./classes/MongoDB";
import { get_emoji_uid } from './functions/get_emoji_uid';

export async function handle_react_add(message: PossiblyUncachedMessage, emoji: Emoji, user: {id: string}, client: Client, translator: Translator, mongo_db: MongoDB) {
    if (!message.guildID)
        return;

	const server_config = new ServerConfig(message.guildID, mongo_db);
	await server_config.load();

    let emojiUid = get_emoji_uid(emoji);

	if (!server_config.roles.reactions[message.channel.id] ||
		!server_config.roles.reactions[message.channel.id][message.id] ||
		!server_config.roles.reactions[message.channel.id][message.id][emojiUid])
		return;

	const guild = client.guilds.find(g => g.id === message.guildID);

	const role = guild.roles.find(
		r => r.id === server_config.roles.reactions[message.channel.id][message.id][emojiUid]
	);

	if (!role) {
		delete server_config.roles.reactions[message.channel.id][message.id][emojiUid];
		server_config.save();
	}

	try {
		await client.addGuildMemberRole(guild.id, user.id, role.id, translator.trans(server_config.lang, 'reactions.add_role'));
	} catch(e) { }
}