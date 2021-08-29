import { BaseCommand } from "../_BaseCommand";
import { DEVIDS } from "../../../conf/devids";

export class BaseAdminCommand extends BaseCommand {
	public async has_permissions(): Promise<boolean> {
		return this.message.member.permissions.has('administrator') ||
			DEVIDS.includes(this.message.member.id)
		;
	}
}