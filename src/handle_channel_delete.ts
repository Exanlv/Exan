import { Channel, TextChannel } from "eris";
import { ServerConfig } from "./classes/ServerConfig";
import { MongoDB } from "./classes/MongoDB";

export async function handle_channel_delete(channel: Channel, mongo_db: MongoDB) {
	if (channel.type !== 0)
		return;
	
	const server_config = new ServerConfig((channel as TextChannel).guild.id, mongo_db);
	await server_config.load();

	if (!server_config.roles.reactions[channel.id])
		return;
	
	delete server_config.roles.reactions[channel.id];

	server_config.save();
}