import { Emoji, PartialEmoji } from "eris";

export function get_emoji_uid(emoji: Emoji|PartialEmoji): string {
    return emoji.id ? `${emoji.name}:${emoji.id}` : emoji.name;
}