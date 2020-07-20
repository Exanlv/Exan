import { existsSync, readFileSync, writeFileSync } from 'fs';
import { RoleConfig } from './RoleConfig';

export class ServerConfig {
	public prefix: string = ';;';
	public dev: boolean = false;
	
	public roles: RoleConfig = {roles: [], categories: [], reactions: {}};

	public lang: string = 'en';

	private path: string;

	constructor(guild_id: string) {
		this.path = `${process.cwd()}/data/server_config/${guild_id}`;
		this[existsSync(this.path) ? 'load' : 'save']();
	}

	private load(): void {
		const config = JSON.parse(
			readFileSync(this.path).toString()
		);

		for (let i in config)
			this[i] = config[i];
	}

	public save(): void {
		writeFileSync(this.path, this.to_json());
	}

	public to_json(): string {
		const blacklist = ['path'];

		const obj = {};

		for (let i in this)
			if (!blacklist.includes(i))
				obj[i.toString()] = this[i];
		
		return JSON.stringify(obj);
	}
}