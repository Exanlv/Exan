export class Command {
	public trigger: string;
	public class: any;
	public description?: string;

	public sub_commands?: Command[];
}