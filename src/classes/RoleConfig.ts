import { Category } from "./Category";

export class RoleConfig {
	public roles: string[];
	public categories: Category[];
	public reactions: {[message_id: string]: {[reaction_id: string]: string}}
}