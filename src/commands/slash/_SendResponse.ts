import { ApplicationCommand } from "classes/ApplicationCommand";
import { Client } from "eris";

export async function sendSlashResponse(command: ApplicationCommand, bot: Client, content: string) {
    const method = 'POST';
    const path = `/interactions/${command.id}/${command.token}/callback`;
    const auth = true;
    const body = {
        "type": 4,
        "data": {
            "content": content
        }
    }
    const file = null
    
    bot.requestHandler.request(method, path, auth, body, file)
}
