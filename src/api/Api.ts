import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { Exan } from '../index';
import { ExanController } from './Controllers/ExanController';

export class Api {
    public server: Server;

    public routes: {
        GET?: Array<Request>,
        HEAD?: Array<Request>,
        POST?: Array<Request>,
        PUT?: Array<Request>,
        DELETE?: Array<Request>,
        CONNECT?: Array<Request>,
        OPTIONS?: Array<Request>,
        TRACE?: Array<Request>,
        PATCH?: Array<Request>,
    } = {};

    public constructor() {
        this.server = createServer(Api.requestListener);

        new ExanController(this);

        this.server.listen(3000);
    }

    public static requestListener(req: IncomingMessage, res: ServerResponse) {
        let api = Exan.Instance.api;

        for (let i in api.routes) {
            for (let j in api.routes[i]) {
                if (req.url === api.routes[i][j].uri) {
                    api.resolve(api.routes[i][j], req, res);

                    return;
                }
            }
        }

        res.writeHead(404);
        res.end();
    }

    private resolve(request: Request, req: IncomingMessage, res: ServerResponse) {
        request.callback(req, res).catch((e) => {
            console.log(e);

            res.writeHead(502);
            res.end();
        });
    }

    public register(
        method: 'GET'|'HEAD'|'POST'|'PUT'|'DELETE'|'CONNECT'|'OPTIONS'|'TRACE'|'PATCH',
        uri: string,
        callback: (req: IncomingMessage, res: ServerResponse) => Promise<void>
    ) {
        if (!this.routes[method]) {
            this.routes[method] = [];
        }
        
        this.routes[method].push({
            uri: uri,
            callback: callback
        });
    }

    public static async getBody(req: IncomingMessage): Promise<string> {
        return new Promise((resolve) => {
            let body = '';

            req.on('data', (chunk) => {
                body += chunk;
            });
    
            req.on('end', () => {
                resolve(body);
            })
        });
    }

    public static async respondJson(res: ServerResponse, data: any, status: number = 200) {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(status);
        res.end(JSON.stringify(data));
    }
}

class Request {
    public uri: string;
    public callback: (req: IncomingMessage, res: ServerResponse) => Promise<void>;
}