import { BaseCommand } from "./_BaseCommand";

export class GetRoleCommand extends BaseCommand {
	public async handle(): Promise<void> {
		const role_name = this.args.length >= 2 ?
			this.args.splice(1, this.args.length - 1).join(' ')
				:
			await this.get_reply(this.trans('commands.get_role.enter_role'))
		;
		
		if (!role_name) {
			await this.reply(this.trans('commands.remove_role.no_role'));
			return;
		}

		const role = this.guild.roles.find(r => r.name.toLowerCase() === role_name);

		if (!role || !this.server_config.roles.roles.includes(role.id)) {
			await this.reply(this.trans('commands.get_role.role_not_self_assignable'));
			return;
		}

		await this.message.member.addRole(role.id, this.trans('commands.get_role.admin_log', {}, true)); // @todo translate

		await this.mark_handled();
	}

	public async handle_help(): Promise<void> {
		await this.reply(this.trans('commands.get_role.help'));
	}
}