import { BaseCommand } from './_BaseCommand';
import { COMMANDS } from '../../conf/commands';
import { Command } from '../classes/Command';
import { handle_command } from '../handle_command';

export class HelpCommand extends BaseCommand {
	public async handle(): Promise<void> {
		let commands;

		const pre = this.args.slice(1).join(' ');

		if (this.args.length > 1) {
			const command_data = handle_command(this.args.slice(1), COMMANDS);

			if (!command_data || !command_data.sub_commands) {
				await this.reply(
					this.trans(
						'commands.help.not_a_category',
						{category: pre, command: `${this.server_config.prefix}help`}
					)
				);

				return;
			}

			commands = command_data.sub_commands;
		} else {
			commands = COMMANDS;
		}

		const permitted_commands: Array<Command> = [];

		for (let i in commands) {
			const command_instance = new commands[i].class(
				this.message,
				this.client,
				this.server_config,
				this.user_config,
				this.args,
				this.translator
			);

			if (await command_instance.has_permissions())
				permitted_commands.push(commands[i]);
		}

		const embed = {
			title: this.trans('commands.help.commands_for', {username: this.message.member.username}),
			type: 'rich',
			description: this.trans('commands.help.description', {command: `${this.server_config.prefix}help`}),
			fields: []
		};

		for (let i in permitted_commands) {
			const field = {
				name: `${this.server_config.prefix}${pre ? pre + ' ' : ''}${permitted_commands[i].trigger}`,
				value: this.trans(`commands.help.descriptions.${permitted_commands[i].description}`)
			}

			if (permitted_commands[i].sub_commands) {
				const extra = this.format_subcommands(
					permitted_commands[i].sub_commands.map((command) => {
						return { command: command, prefix: field.name }
					})
				);

				field.value += `\n\n**${this.trans('commands.help.sub_commands')}**:\n${extra}`;
			}
			
			embed.fields.push(field);
		}

		await this.reply({embed: embed});
	}

	private format_subcommands(sub_commands: Array<{command: Command, prefix: string}>): string {
		let val = '';

		for (let i in sub_commands) {
			const text_command = `${sub_commands[i].prefix} ${sub_commands[i].command.trigger}`;

			val += `${text_command}\n`;

			if (sub_commands[i].command.sub_commands) {
				const extra = this.format_subcommands(sub_commands[i].command.sub_commands.map((command) => {
					return {command: command, prefix: text_command};
				}));

				val += `${extra}`;
			}
		}

		return val;
	}
}