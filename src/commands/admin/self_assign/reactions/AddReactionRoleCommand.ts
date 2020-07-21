import { BaseAdminCommand } from "../../_BaseAdminCommand";
import { Reaction } from "../../../../classes/Reaction";
import { Message, Emoji } from "eris";

export class AddReactionRoleCommand extends BaseAdminCommand {
	public async handle(): Promise<void> {
		const role_name = (this.args.length >= 4 ?
			this.args.splice(3, this.args.length - 1).join(' ')
				:
			await this.get_reply(
				this.trans('commands.add_reaction_role.enter_role')
			) ?? ''
		).toLowerCase();

		if (!role_name) {
			await this.reply(this.trans('commands.add_reation_role.no_role'));
			return;
		}

		const role = this.guild.roles.find(r => r.name.toLowerCase() === role_name);

		if (!role) {
			await this.reply(this.trans('commands.add_reation_role.invalid_role'));
			return;
		}

		if (!this.server_config.roles.roles.includes(role.id)) {
			await this.reply(this.trans('commands.add_reation_role.role_not_self_assignable'));
			return;
		}

		await this.reply('commands.add_reation_role.add_react');

		let react: Reaction;

		try {
			react = await this.get_react();
		} catch (e) {
			await this.reply(this.trans('commands.add_reation_role.no_react'));
			return;
		}

		try {
			await this.client.addMessageReaction(react.message.channel.id, react.message.id, react.emoji.uid);
		} catch (e) {
			await this.reply(this.trans('commands.add_reaction_role.add_reaction_failed'));
			return;
		}

		try {
			await this.client.removeMessageReaction(react.message.channel.id, react.message.id, react.emoji.uid, this.message.member.id);
		} catch (e) {
			await this.reply(this.trans('commands.add_reaction_role.failed_removing_setup_react'));
		}

		if (!this.server_config.roles.reactions[react.message.channel.id])
			this.server_config.roles.reactions[react.message.channel.id] = {};
		
		if (!this.server_config.roles.reactions[react.message.channel.id][react.message.id])
			this.server_config.roles.reactions[react.message.channel.id][react.message.id] = {};

		this.server_config.roles.reactions
			[react.message.channel.id]
			[react.message.id]
			[react.emoji.uid] = role.id;
		
		this.server_config.save();

		await this.reply(this.trans('commands.add_reation_role.complete'));
	}
	
	public async get_react(): Promise<Reaction> {
		return new Promise((resolve, reject) => {
			const event_handler = (reaction: Reaction) => {
				if (reaction.user_id === this.message.member.id) {
					this.client.removeListener('reactionAdd', event_handler);
					resolve(reaction);
				}
			};
			
			setTimeout(() => {
				this.client.removeListener('reactionAdd', event_handler);

				reject();
			}, 30000);

			this.client.on('reactionAdd', event_handler);
		});
	}
}