import { Command } from '../src/classes/Command';
import { SlashContributeCommand } from '../src/commands/slash/SlashContributeCommand';

export const SLASH_COMMANDS: Command[] = [
    {
        trigger: 'contribute',
        class: SlashContributeCommand,
        description: 'contribute'
    }
];