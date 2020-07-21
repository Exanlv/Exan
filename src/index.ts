import * as Eris from 'eris';
import { ServerConfig } from './classes/ServerConfig';
import { handle_command } from './handle_command';
import { COMMANDS } from '../conf/commands';
import { UnknownCommand } from './commands/UnknownCommand';
import { readFileSync } from 'fs';
import { Translator } from './classes/Translator';
import { LANGUAGES } from '../conf/lang';
import { Reaction } from './classes/Reaction';
import { handle_message } from './handle_message';
import { handle_react_add } from './handle_react_add';
import { handle_raw } from './handle_raw';
import { handle_react_remove } from './handle_react_remove';

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


bot.on('rawWS', (event: {[key: string]: any}) => {
	handle_raw(event, bot);
});


/**
 * Custom events
 */

bot.on('reactionAdd', (event: Reaction) => {
	handle_react_add(event, bot, translator);
});

bot.on('reactionRemove', (event: Reaction) => {
	handle_react_remove(event, bot, translator);
});

bot.connect();