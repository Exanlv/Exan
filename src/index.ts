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

const translator = new Translator;

for (let i in LANGUAGES) {
	translator.import_object(LANGUAGES[i].lang_code, LANGUAGES[i].lang);
}

const bot = Eris(readFileSync('.token').toString().trim());

bot.on('ready', () => {
	console.log('ready');
});

bot.on('messageCreate', (message: Eris.Message) => {
	handle_message(message, bot, translator);
});

bot.on('channelDelete', (channel: Eris.Channel) => {
	handle_channel_delete(channel);
});


/**
 * Custom events
 */

bot.on('rawWS', (event: {[key: string]: any}) => {
	handle_raw(event, bot);
});

bot.on('reactionAdd', (event: Reaction) => {
	handle_react_add(event, bot, translator);
});

bot.on('reactionRemove', (event: Reaction) => {
	handle_react_remove(event, bot, translator);
});

bot.on('reactionRemoveAll', (event: ReactionRemoveAll) => {
	handle_react_remove_all(event);
});

bot.on('messageDeleteC', (event: MessageDeleteC) => {

});

bot.connect();