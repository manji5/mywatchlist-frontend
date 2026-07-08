import type { Profile } from "../types";

export function mapProfile(
    response: any
): Profile {
    return {
        username: response.username,

        avatar: response.avatarUrl ?? null,

        joinedAt: response.joinedAt ?? null,

        stats: {
            total: response.stats?.total ?? 0,

            movies: response.stats?.movies ?? 0,

            series: response.stats?.series ?? 0,

            anime: response.stats?.anime ?? 0,

            completed:
                response.stats?.completed ?? 0,

            watching:
                response.stats?.watching ?? 0,

            planned:
                response.stats?.planned ?? 0,

            onHold:
                response.stats?.onHold ?? 0,

            dropped:
                response.stats?.dropped ?? 0,
        },
    };
}