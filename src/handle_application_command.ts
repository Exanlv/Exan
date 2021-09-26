import { ApplicationCommand } from 'classes/ApplicationCommand';
import { MongoDB } from 'classes/MongoDB';
import { Translator } from 'classes/Translator';
import { Client } from 'eris';
import { ServerConfig } from "./classes/ServerConfig";
import { UserConfig } from './classes/UserConfig';

export async function handle_application_command(command: ApplicationCommand, bot: Client, translator: Translator, mongo_db: MongoDB) {
    console.log(command)

    const server_config = new ServerConfig(command.guild_id, mongo_db);
	await server_config.load();

	const user_config = new UserConfig(command.member.user.id, mongo_db);
	await user_config.load();

    let args;
    args = [];

    if (command.data.options) {
        let count = 0;
        for (let i in command.data.options) {
            args.push(command.data.options[count].value);
            count++;
        }
    }
}