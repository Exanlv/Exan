import { ApplicationCommand } from 'classes/ApplicationCommand';
import { MongoDB } from 'classes/MongoDB';
import { Translator } from 'classes/Translator';
import { Client } from 'eris';

export async function handle_application_command(command: ApplicationCommand, bot: Client, translator: Translator, mongo_db: MongoDB) {
    await bot.createMessage(command.channel_id, "hi");
}