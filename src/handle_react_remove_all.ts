import { ReactionRemoveAll } from "./classes/ReactionRemoveAll";
import { ServerConfig } from "./classes/ServerConfig";

export async function handle_react_remove_all(event: ReactionRemoveAll) {
	const server_config = new ServerConfig(event.guild_id);

	if (!server_config.roles.reactions[event.channel_id] ||
		!server_config.roles.reactions[event.channel_id][event.message_id])
		return;

	delete server_config.roles.reactions[event.channel_id][event.message_id];
	server_config.save();
}