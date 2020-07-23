import { Channel, TextChannel } from "eris";
import { ServerConfig } from "./classes/ServerConfig";

export async function handle_channel_delete(channel: Channel) {
	if (channel.type !== 0)
		return;
	
	const server_config = new ServerConfig((channel as TextChannel).guild.id);

	if (!server_config.roles.reactions[channel.id])
		return;
	
	delete server_config.roles.reactions[channel.id];

	server_config.save();
}