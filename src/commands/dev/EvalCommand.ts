import { BaseDevCommand } from "./_BaseDevCommand";

export class EvalCommand extends BaseDevCommand {
	public async handle(): Promise<void> {
        const code = this.message.content.substring(this.server_config.prefix.length + this.args[0].length).trim();

		try {
			const res = String((eval(code))).slice(0, 1990);

			await this.reply(`\`\`\`${res}\`\`\``);
		} catch (e) {
			await this.reply(`\`\`\`${String(e).slice(0, 1990)}\`\`\``);
		}
	}
}