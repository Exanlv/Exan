import { BaseAdminCommand } from "../../_BaseAdminCommand";

export class RemoveReactionRoleCommand extends BaseAdminCommand {
	public async handle(): Promise<void> {
		await this.reply(
			this.trans('commands.remove_reaction_role.info')
		);
	}
}