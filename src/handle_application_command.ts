import { ApplicationCommand } from 'classes/ApplicationCommand';
import { MongoDB } from 'classes/MongoDB';
import { Translator } from 'classes/Translator';
import { Client } from 'eris';

export async function handle_application_command(command: ApplicationCommand, bot: Client, translator: Translator, mongo_db: MongoDB) {
    const method = 'POST';
    const path = `/interactions/${command.id}/${command.token}/callback`;
    const auth = true;
    const body = {
        "type": 4,
        "data": {
            "content": "test response"
        }
    }
    const file = null

    bot.requestHandler.request(method, path, auth, body, file);
}