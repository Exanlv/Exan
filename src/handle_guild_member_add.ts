import { Guild, Member, Client } from "eris";
import { MongoDB } from "./classes/MongoDB";
import { ServerConfig } from "./classes/ServerConfig";
import { Translator } from "./classes/Translator";

export async function handle_guild_member_add(guild: Guild, member: Member, client: Client, translator: Translator, mongo_db: MongoDB) {
    const server_config = new ServerConfig(guild.id, mongo_db);
    await server_config.load();

    for (let i in server_config.roles.reactions) {
        for (let j in server_config.roles.reactions[i]) {
            for (let k in server_config.roles.reactions[i][j]) {
                const role_id = server_config.roles.reactions[i][j][k];

                if (!server_config.roles.roles.includes(role_id))
                    continue;
                
                try {
                    if ((await client.getMessageReaction(
                            i,
                            j,
                            k,
                            {
                                limit: 1,
                                after: (Number(member.id) - 1).toString()
                            }
                        )).find(u => u.id === member.id)
                    ) {
                        client.addGuildMemberRole(guild.id, member.id, role_id, translator.trans(server_config.lang, 'reactions.restore_role'));
                    }
                } catch (e) {
                    continue;
                }
            }
        }
    }
}