export type HomeSectionType =
    | "movie"
    | "series"
    | "anime"
    | "watchlist";

export interface HomeMedia {
    id: number;

    externalId: string;

    type: "MOVIE" | "TV_SERIES" | "ANIME";

    title: string;

    poster: string | null;

    backdrop: string | null;

    score: number | null;

    watchedEpisodes: number;

    totalEpisodes: number;

    progress: number;
}