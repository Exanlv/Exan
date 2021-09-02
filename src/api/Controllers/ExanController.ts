import { ServerConfig } from '../../classes/ServerConfig';
import { IncomingMessage, ServerResponse } from 'http';
import { Exan } from '../../index';
import { Api } from '../Api';

export class ExanController {
    public api: Api;

    constructor(api: Api) {
        this.api = api;

        this.api.register('POST', '/exan/guild/in', this.inGuild);
        this.api.register('GET', '/exan/guild/config', this.guildConfig);
    }

    public async inGuild(req: IncomingMessage, res: ServerResponse) {
        let body = await Api.getBody(req);

        let guildIds: Array<string>;

        try {
            guildIds = JSON.parse(body);

            if (!Array.isArray(guildIds)) {
                throw 'Invalid guild IDs';
            }
        } catch (e) {
            res.writeHead(400);
            res.end();

            return;
        }

        let result: Array<string> = [];

        for (let i in guildIds) {
            if (!ServerConfig.hasConfig(guildIds[i])) {
                continue;
            }

            try {
                await Exan.Instance.bot.getRESTGuild(guildIds[i]);
                result.push(guildIds[i]);
            } catch (e) { /* Error == bot not in invalid id and/or not in guild */ }
        }
        
        Api.respondJson(res, result);
    }

    public async guildConfig(req: IncomingMessage, res: ServerResponse) {
        let body = await Api.getBody(req);

        let guild_id: string;
        
        try {
            guild_id = JSON.parse(body).guild_id;
        } catch (e) {
            res.writeHead(400);
            res.end();

            return;
        }

        let data = await ServerConfig.getConfigData(guild_id);

        if (!data) {
            res.writeHead(404);
            res.end();

            return;
        }

        Api.respondJson(res, data);
    }
}