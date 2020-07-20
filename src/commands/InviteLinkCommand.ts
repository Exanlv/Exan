import { BaseCommand } from "./_BaseCommand";
import { INVITE_LINK } from "../../conf/invite_link";

export class InviteLinkCommand extends BaseCommand {
	public async handle(): Promise<void> {
		this.reply(
			this.trans(
				'commands.invite_link.invite_link',
				{
					link: INVITE_LINK
				}
			)
		)
	}
}