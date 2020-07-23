import { existsSync, readFileSync, writeFileSync } from 'fs';
import { RoleConfig } from './RoleConfig';
import { MongoDB } from './MongoDB';

export class UserConfig {
	private _id: string;
	private mongo_db: MongoDB;

	public lang: string;

	constructor(user_id: string, mongo_db: MongoDB) {
		this._id = user_id;
		this.mongo_db = mongo_db;
	}

	public async load(): Promise<void> {
		const data = await this.mongo_db.get('user_configs', this._id);

		if (data)
			for (let i in data)
				this[i] = data[i];
	}

	public async save(): Promise<void> {
		if (await this.mongo_db.get('user_configs', this._id)) {
			await this.mongo_db.update('user_configs', this._id, this.to_obj());
		} else {
			await this.mongo_db.insert('user_configs', this.to_obj());
		}
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