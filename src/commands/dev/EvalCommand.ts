import { BaseDevCommand } from "./_BaseDevCommand";

export class EvalCommand extends BaseDevCommand {
	public async handle(): Promise<void> {
		const args = this.args.splice(1, this.args.length - 1);

		try {
			const res = eval(args.join(' '));

			await this.reply(`\`\`\`${res}\`\`\``);
		} catch (e) {
			await this.reply(`\`\`\`${e}\`\`\``);
		}
	}
}