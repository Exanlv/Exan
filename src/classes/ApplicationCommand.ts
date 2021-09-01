export class ApplicationCommand {
    public version: number;
    public type: number;
    public token: string;
	public member: {
        user: {
            username: string;
            public_flags: string;
            id: string;
            discriminator: string;
            avatar: string;
        }
        roles: string[];
        premium_since?: string;
        permissions: string;
        pending: boolean;
        nick?: string;
        mute: boolean;
        joined_at: string;
        is_pending: boolean;
        deaf: false;
        avatar?: string;
    };
    public id: string;
    public data: {
        type: number;
        name: string;
        id: string;
        options?: {
            value: string;
            type: number;
            name: string;
            }
    };
    public guild_id: string;
    public channel_id: string;
}