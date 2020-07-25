import { Guild, Role } from "eris";
import { MongoDB } from "./classes/MongoDB";
import { ServerConfig } from "./classes/ServerConfig";

export async function handle_guild_role_delete(guild: Guild, role: Role, mongo_db: MongoDB) {
	const server_config = new ServerConfig(guild.id, mongo_db);
	await server_config.load();

	if (!server_config.roles.roles.includes(role.id))
		return;

	server_config.roles.roles.splice(
		server_config.roles.roles.indexOf(role.id),
		1
	);

	await server_config.save();
}