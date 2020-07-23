import { ReactionRemoveAll } from "./classes/ReactionRemoveAll";
import { ServerConfig } from "./classes/ServerConfig";
import { MongoDB } from "./classes/MongoDB";

export async function handle_react_remove_all(event: ReactionRemoveAll, mongo_db: MongoDB) {
	const server_config = new ServerConfig(event.guild_id, mongo_db);
	await server_config.load();

	if (!server_config.roles.reactions[event.channel_id] ||
		!server_config.roles.reactions[event.channel_id][event.message_id])
		return;

	delete server_config.roles.reactions[event.channel_id][event.message_id];
	server_config.save();
}