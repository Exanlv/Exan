import { BaseCommand } from "./_BaseCommand";
import { GIT_LINK } from "../../conf/git_link";

export class ContributeCommand extends BaseCommand {
	public async handle(): Promise<void> {
		await this.reply(
			this.trans(
				'commands.contribute.contribute',
				{
					link: GIT_LINK
				}
			)
		);
	}
}