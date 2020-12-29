import { BaseCommand } from "./_BaseCommand";

export class PrivacyPolicyCommand extends BaseCommand {
	public async handle(): Promise<void> {
		await this.reply(this.trans('commands.privacy_policy.policy'));
	}
}