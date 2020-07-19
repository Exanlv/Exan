import { existsSync, readFileSync, writeFileSync } from 'fs';
import { RoleConfig } from './RoleConfig';

export class UserConfig {
	private path: string;

	public lang: string;

	constructor(user_id: string) {
		this.path = `${process.cwd()}/data/user_config/${user_id}`;
		
		if (existsSync(this.path))
			this.load();
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

	private to_json(): string {
		const blacklist = ['path'];

		const obj = {};

		for (let i in this)
			if (!blacklist.includes(i))
				obj[i.toString()] = this[i];
		
		return JSON.stringify(obj);
	}
}