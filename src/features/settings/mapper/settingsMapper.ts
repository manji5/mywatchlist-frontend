import type { Settings } from "../types";

export function mapSettings(
    response: any
): Settings {
    return {
        username: response.username,

        email: response.email,

        avatar: response.avatarUrl ?? null,
    };
}