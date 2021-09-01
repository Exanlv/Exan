import { IncomingMessage, ServerResponse } from 'http';
import { Api } from '../Api';

export class ExanController {
    public api: Api;

    constructor(api: Api) {
        this.api = api;

        this.api.register('POST', '/exan/guilds/in', this.inGuild);
    }

    public async inGuild(req: IncomingMessage, res: ServerResponse) {
        let body = await Api.getBody(req);

        try {
            let guildIds = JSON.parse(body);

            if (!Array.isArray(guildIds)) {
                throw 'Invalid guild IDs';
            }
        } catch (e) {
            res.writeHead(400);
            res.end();

            return;
        }
        
        res.end('Hello there!');
    }
}