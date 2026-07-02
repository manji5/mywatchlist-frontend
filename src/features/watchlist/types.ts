export type WatchStatus =
    | "PLAN_TO_WATCH"
    | "WATCHING"
    | "COMPLETED"
    | "ON_HOLD"
    | "DROPPED";

export type MediaType =
    | "MOVIE"
    | "TV_SERIES"
    | "ANIME";

export interface WatchlistItem {

    id: number;

    externalId: string;

    title: string;

    poster: string;

    score: number | null;

    duration: number;

    episodes: number;

    watchedEpisodes: number;

    totalWatchedMinutes: number;

    type: MediaType;

    status: WatchStatus;

}

export type WatchlistSort =
    | "RECENT"
    | "TITLE"
    | "RATING"
    | "PROGRESS"
    | "WATCH_TIME";