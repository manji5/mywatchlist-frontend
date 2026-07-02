import type { WatchlistItem } from "../types";

export function mapWatchlistResponse(
    response: any
): WatchlistItem[] {

    return response.content.map((item: any) => ({

        id: item.id,

        externalId: item.externalId,

        title: item.title,

        poster: item.posterUrl,

        score: item.score,

        duration: item.duration,

        episodes: item.episodes,

        watchedEpisodes: item.watchedEpisodes,

        totalWatchedMinutes:
            item.totalWatchedMinutes,

        type: item.type,

        status: item.status,

    }));

}