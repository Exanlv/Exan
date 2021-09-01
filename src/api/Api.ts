import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { ExanController } from './Controllers/ExanController';

export class Api {
    private static _instance: Api = null;

    public server: Server;

    public routes: {
        'GET': Array<Request>,
        'HEAD': Array<Request>,
        'POST': Array<Request>,
        'PUT': Array<Request>,
        'DELETE': Array<Request>,
        'CONNECT': Array<Request>,
        'OPTIONS': Array<Request>,
        'TRACE': Array<Request>,
        'PATCH': Array<Request>,
    } = {
        'GET': [],
        'HEAD': [],
        'POST': [],
        'PUT': [],
        'DELETE': [],
        'CONNECT': [],
        'OPTIONS': [],
        'TRACE': [],
        'PATCH': [],
    };

    private constructor() {
        this.server = createServer(Api.requestListener);

        new ExanController(this);

        this.server.listen(3000);
    }

    public static get Instance(): Api {
        return this._instance === null ? (this._instance = new this()) : this._instance;
    }

    public static requestListener(req: IncomingMessage, res: ServerResponse) {
        let api = Api.Instance;

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
        });
    }

    public register(
        method: 'GET'|'HEAD'|'POST'|'PUT'|'DELETE'|'CONNECT'|'OPTIONS'|'TRACE'|'PATCH',
        uri: string,
        callback: (req: IncomingMessage, res: ServerResponse) => Promise<void>
    ) {
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
}

class Request {
    public uri: string;
    public callback: (req: IncomingMessage, res: ServerResponse) => Promise<void>;
}