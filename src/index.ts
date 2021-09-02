import { Api } from "./api/Api";
import * as Eris from 'eris';
import { Translator } from './classes/Translator';
import { LANGUAGES } from '../conf/lang';
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

export class Exan {
    private static _instance: Exan;

    public api: Api;
    public bot: Eris.Client;
    public mongo_db: MongoDB;
    public translator: Translator;

    private constructor() {
        this.bot = Eris(`Bot ${process.env.DISCORD_TOKEN}`, {
            allowedMentions: {
                everyone: false,
                users: false,
                roles: false
            }
        });

        this.translator = new Translator;

        this.registerEventHandlers();
        this.registerLanguages();        

        this.mongo_db = new MongoDB(process.env.MONGODB_HOST, process.env.MONGODB_PORT, process.env.MONGODB_DB);

        this.mongo_db.connect().then(() => {
            this.bot.connect();

            this.bot.options.restMode = true; // :^) ty eris

            this.api = new Api();
        });

    }

    public static get Instance() {
        return this._instance ? this._instance : (this._instance = new this());
    }

    private registerEventHandlers() {
        this.bot.on('ready', async () => {
            this.bot.editStatus('online', {name: `@${this.bot.user.username} help | Roles`, type: 3});

            console.log('ready');
        });
        
        this.bot.on('messageCreate', (message: Eris.Message) => {
            handle_message(message, this.bot, this.translator, this.mongo_db);
        });
        
        this.bot.on('channelDelete', (channel: Eris.Channel) => {
            handle_channel_delete(channel, this.mongo_db);
        });
        
        this.bot.on('guildRoleDelete', (guild: Eris.Guild, role: Eris.Role) => {
            handle_guild_role_delete(guild, role, this.mongo_db);
        });
        
        this.bot.on('guildMemberAdd', (guild: Eris.Guild, member: Eris.Member) => {
            handle_guild_member_add(guild, member, this.bot, this.translator, this.mongo_db);
        });
        
        this.bot.on('messageReactionAdd', (message: Eris.PossiblyUncachedMessage, emoji: Eris.Emoji, user: {id: string}) => {
            handle_react_add(message, emoji, user, this.bot, this.translator, this.mongo_db);
        });
        
        this.bot.on('messageReactionRemove', (message: Eris.PossiblyUncachedMessage, emoji: Eris.PartialEmoji, user_id: string) => {
            handle_react_remove(message, emoji, {id: user_id}, this.bot, this.translator, this.mongo_db);
        });

        /**
         * Custom events
         */
        this.bot.on('rawWS', (event: {[key: string]: any}) => {
            handle_raw(event, this.bot);
        });

        this.bot.on('reactionRemoveAll', (event: ReactionRemoveAll) => {
            handle_react_remove_all(event, this.mongo_db);
        });

        this.bot.on('messageDeleteC', (event: MessageDeleteC) => {
            handle_message_delete_c(event, this.mongo_db);
        });
    }

    public registerLanguages() {
        for (let i in LANGUAGES) {
            this.translator.import_object(LANGUAGES[i].lang_code, LANGUAGES[i].lang);
        }
    }
}

Exan.Instance;