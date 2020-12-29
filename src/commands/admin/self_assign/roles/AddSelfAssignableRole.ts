import { BaseAdminCommand } from "../../_BaseAdminCommand";

export class AddSelfAssignableRole extends BaseAdminCommand {
	public async handle(): Promise<void> {
		const role_name = this.args.length < 4 ?
			await this.get_reply(this.trans('commands.add_self_assignable_role.enter_role'))
				:
			this.args.splice(3, this.args.length - 1).join(' ')
		;
		
		if (!role_name) {
			await this.reply(this.trans('commands.add_self_assignable_role.no_role'));
			return;
		}

		const role = this.guild.roles.find(r => r.name.toLowerCase() === role_name);

		if (!role) {
			await this.reply(
				this.trans(
					'commands.add_self_assignable_role.invalid_role',
					{
						role: role_name
					}
				)
			);
			return;
		}

		if (this.server_config.roles.roles.includes(role.id)) {
			await this.reply(
				this.trans(
					'commands.add_self_assignable_role.role_already_self_assignable',
					{
						role: role.name
					}
				)
			);
			return;
		}

		this.server_config.roles.roles.push(role.id);
		await this.server_config.save();

		await this.mark_handled();
	}

	public async handle_help(): Promise<void> {
		await this.reply(this.trans('commands.add_self_assignable_role.help'));
	}
}