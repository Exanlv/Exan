import { Client } from "eris";

export function handle_raw(event: {[key: string]: any}, client: Client) {
	const raw_events = ['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'];

	switch (event.t) {
		case 'MESSAGE_REACTION_ADD':
			if (!event.d.guild_id)
				return;

			client.emit('reactionAdd', {
				message: {
					id: event.d.message_id,
					channel: {
						id: event.d.channel_id
					},
					guild: {
						id: event.d.guild_id
					}
				},
				emoji: {
					id: event.d.emoji.id,
					name: event.d.emoji.name,
					uid: event.d.emoji.id ? `${event.d.emoji.name}:${event.d.emoji.id}` : event.d.emoji.name
				},
				user_id: event.d.user_id
			});
		break;
		case 'MESSAGE_REACTION_REMOVE':
			if (!event.d.guild_id)
				return;

			client.emit('reactionRemove', {
				message: {
					id: event.d.message_id,
					channel: {
						id: event.d.channel_id
					},
					guild: {
						id: event.d.guild_id
					}
				},
				emoji: {
					id: event.d.emoji.id,
					name: event.d.emoji.name,
					uid: event.d.emoji.id ? `${event.d.emoji.name}:${event.d.emoji.id}` : event.d.emoji.name
				},
				user_id: event.d.user_id
			});
		break;

	}
}
