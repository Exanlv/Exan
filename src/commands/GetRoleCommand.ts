import { BaseCommand } from "./_BaseCommand";

export class GetRoleCommand extends BaseCommand {
	public async handle(): Promise<void> {
		if (this.args.length < 2) {
			await this.reply('No role given');
			return;
		}

		const role_name = this.args.splice(1, this.args.length - 1).join(' ');

		const role = this.guild.roles.find(r => r.name.toLowerCase() === role_name);

		if (!role || !this.server_config.roles.roles.includes(role.id)) {
			await this.reply('This role is not self-assignable');
			return;
		}

		await this.message.member.addRole(role.id, 'Requested role to be added');

		await this.mark_handled();
	}
}