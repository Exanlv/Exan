import { Category } from "./Category";

export class RoleConfig {
	public roles: string[];
	public categories: Category[];
	public reactions: {[channel_id: string]: {[message_id: string]: {[emote_id: string]: string}}}
}