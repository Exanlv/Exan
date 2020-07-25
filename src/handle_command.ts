import { Command } from "./classes/Command";

export function handle_command(args: string[], commands: Command[]): Command {
	for (let i in commands) {
		if (commands[i].trigger === args[0]) {
			if (!commands[i].sub_commands || args.length === 1)
				return commands[i];
			
			return handle_command(args.slice(1), commands[i].sub_commands) ?? commands[i];
		}
	}
}