import { BaseCommand } from "../_BaseCommand";
import { DEVIDS } from "../../../conf/devids";

export class BaseDevCommand extends BaseCommand {
	public async has_permissions(): Promise<boolean> {
		return DEVIDS.includes(this.message.member.id);
	} 
}