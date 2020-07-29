import * as Eris from 'eris';
import { readFileSync } from 'fs';
import { Translator } from './classes/Translator';
import { LANGUAGES } from '../conf/lang';
import { Reaction } from './classes/Reaction';
import { ReactionRemoveAll } from './classes/ReactionRemoveAll';
import { handle_message } from './handle_message';
import { handle_react_add } from './handle_react_add';
import { handle_raw } from './handle_raw';
import { handle_react_remove } from './handle_react_remove';
import { handle_react_remove_all } from './handle_react_remove_all';
import { handle_channel_delete } from './handle_channel_delete';
import { MessageDeleteC } from './classes/MessageDeleteC';
import { MongoDB } from './classes/MongoDB';
import { handle_message_delete_c } from './handle_message_delete_c';
import { handle_guild_role_delete } from './handle_guild_role_delete';
import { handle_guild_member_add } from './handle_guild_member_add';

require('@exan/envreader').load();

const translator = new Translator;
const mongo_db = new MongoDB(process.env.MONGODB_HOST, process.env.MONGODB_PORT, process.env.MONGODB_DB);

for (let i in LANGUAGES) {
	translator.import_object(LANGUAGES[i].lang_code, LANGUAGES[i].lang);
}

const bot = Eris(process.env.DISCORD_TOKEN, {
	allowedMentions: {
		everyone: false,
		users: false,
		roles: false
	}
});

bot.on('ready', async () => {
	bot.editStatus('online', {name: `@${bot.user.username} help | Roles`, type: 3});
	console.log('ready');
});

bot.on('messageCreate', (message: Eris.Message) => {
	handle_message(message, bot, translator, mongo_db);
});

bot.on('channelDelete', (channel: Eris.Channel) => {
	handle_channel_delete(channel, mongo_db);
});

bot.on('guildRoleDelete', (guild: Eris.Guild, role: Eris.Role) => {
	handle_guild_role_delete(guild, role, mongo_db);
});

bot.on('guildMemberAdd', (guild: Eris.Guild, member: Eris.Member) => {
	handle_guild_member_add(guild, member, bot, translator, mongo_db);
});

/**
 * Custom events
 */

bot.on('rawWS', (event: {[key: string]: any}) => {
	handle_raw(event, bot);
});

bot.on('reactionAdd', async (event: Reaction) => {
	handle_react_add(event, bot, translator, mongo_db);
});

bot.on('reactionRemove', (event: Reaction) => {
	handle_react_remove(event, bot, translator, mongo_db);
});

bot.on('reactionRemoveAll', (event: ReactionRemoveAll) => {
	handle_react_remove_all(event, mongo_db);
});

bot.on('messageDeleteC', (event: MessageDeleteC) => {
	handle_message_delete_c(event, mongo_db);
});

(async () => {
	await mongo_db.connect();
	bot.connect();
})();