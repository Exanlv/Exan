import { Client } from "eris";

export function handle_raw(event: {[key: string]: any}, client: Client) {
	switch (event.t) {
		case 'MESSAGE_REACTION_REMOVE_ALL':
			if (!event.d.guild_id)
				return;

			client.emit('reactionRemoveAll', event.d);
		break;
		case 'MESSAGE_DELETE':
			if (!event.d.guild_id)
				return;

			client.emit('messageDeleteC', event.d);
		break;
		case 'MESSAGE_DELETE_BULK':
			if (!event.d.guild_id)
				return;
			
			event.d.ids.forEach((id) => {
				client.emit('messageDeleteC', {
					message_id: id,
					channel_id: event.d.channel_id,
					guild_id: event.d.guild_id,
				});
			});
		break;
		case 'INTERACTION_CREATE':
			client.emit('applicationCommand', event.d);
		break;
	}
}