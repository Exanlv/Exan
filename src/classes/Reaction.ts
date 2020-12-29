export class Reaction {
	public message: {id: string, channel: {id: string}, guild: {id: string}};
	public emoji: {id: string, name: string, uid: string};
	public user_id;
}