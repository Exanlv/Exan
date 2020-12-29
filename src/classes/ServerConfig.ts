import { RoleConfig } from './RoleConfig';
import { MongoDB } from './MongoDB';

export class ServerConfig {
	private _id: string;
	public prefix: string = ';;';
	public dev: boolean = false;
	
	public roles: RoleConfig = {roles: [], categories: [], reactions: {}};

	public lang: string = 'en';

	private mongo_db: MongoDB;

	constructor(guild_id: string, mongo_db: MongoDB) {
		this._id = guild_id;
		this.mongo_db = mongo_db;
	}

	public async load(): Promise<void> {
		const data = await this.mongo_db.get('server_configs', this._id);

		if (!data) {
			await this.create();
			return;
		}

		for (let i in data)
			this[i] = data[i];
	}

	public async create(): Promise<void> {
		await this.mongo_db.insert('server_configs', this.to_obj());
	}

	public async save(): Promise<void> {
		await this.mongo_db.update('server_configs', this._id, this.to_obj());
	}

	private to_obj(): {[key: string]: any} {
		const blacklist = ['mongo_db'];

		const obj = {};

		for (let i in this)
			if (!blacklist.includes(i))
				obj[i.toString()] = this[i];
		
		return obj;
	}

	public to_json(): string {
		return JSON.stringify(this.to_obj());
	}
}