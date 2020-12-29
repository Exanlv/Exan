import { BaseAdminCommand } from "../../_BaseAdminCommand";

export class ListReactionRolesCommand extends BaseAdminCommand {
	public async handle(): Promise<void> {
		const roles: {[url: string]: Array<string>} = {};
		const guild = this.guild;

		for (let i in this.server_config.roles.reactions) {
			for (let j in this.server_config.roles.reactions[i]) {
				for (let k in this.server_config.roles.reactions[i][j]) {
					const role = guild.roles.find(
						r => r.id === this.server_config.roles.reactions[i][j][k]
					);

					if (!role)
						continue;
					
					const message_url = `https://discordapp.com/channels/${this.message.guildID}/${i}/${j}`;

					if (!roles[message_url])
						roles[message_url] = [];
					
					roles[message_url].push(`\`${k} => ${role.name}\``);
				}
			}
		}

		if (Object.keys(roles).length === 0) {
			await this.reply(this.trans('commands.list_reaction_roles.no_roles'));
			return;
		}

		const embed = {
			title: this.trans(
				'commands.list_reaction_roles.roles_for_guild',
				{ guild: guild.name}
			),
			type: 'rich',
			fields: [],
		};

		for (let i in roles) {
			embed.fields.push({
				name: i,
				value: roles[i].join('\n')
			});
		}

		await this.reply({embed: embed});
	}
}