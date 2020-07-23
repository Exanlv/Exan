import { BaseAdminCommand } from "../../_BaseAdminCommand";

export class AddSelfAssignableRole extends BaseAdminCommand {
	public async handle(): Promise<void> {
		const role_name = this.args.length < 4 ? await this.get_reply('> Enter role name') : this.args.splice(3, this.args.length - 1).join(' ');
		
		if (!role_name) {
			await this.reply('No role given');
			return;
		}

		const role = this.guild.roles.find(r => r.name.toLowerCase() === role_name);

		if (!role) {
			await this.reply(`Role \`${role_name}\` does not exist`);
			return;
		}

		if (this.server_config.roles.roles.includes(role.id)) {
			await this.reply(`Role \`${role_name}\` is already self-assignable`);
			return;
		}

		this.server_config.roles.roles.push(role.id);
		await this.server_config.save();

		await this.mark_handled();
	}
}