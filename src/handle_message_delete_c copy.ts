import { ServerConfig } from "./classes/ServerConfig";
import { MessageDeleteC } from "./classes/MessageDeleteC";

export async function handle_react_remove_all(event: MessageDeleteC) {
	const server_config = new ServerConfig(event.guild_id);

	if (!server_config.roles.reactions[event.channel_id] ||
		!server_config.roles.reactions[event.channel_id][event.message_id])
		return;

	delete server_config.roles.reactions[event.channel_id][event.message_id];
	server_config.save();
}