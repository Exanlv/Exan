import { BaseCommand } from "./_BaseCommand";

export class RemoveRoleCommand extends BaseCommand {
	public async handle(): Promise<void> {
		
		const role_name = this.args.length >= 2 ? this.args.splice(1, this.args.length - 1).join(' ') : await this.get_reply('> Enter a role');
		
		if (!role_name) {
			await this.reply('No role given');
			return;
		}

		const role = this.guild.roles.find(r => r.name.toLowerCase() === role_name);

		if (!role || !this.server_config.roles.roles.includes(role.id)) {
			await this.reply('This role is not self-assignable');
			return;
		}

		await this.message.member.removeRole(role.id, 'Requested role to be removed');

		await this.mark_handled();
	}
}