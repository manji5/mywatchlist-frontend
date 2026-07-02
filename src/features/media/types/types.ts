export type MediaType = "movie" | "series" | "anime";

export interface Media {

    id: number;

    type?: MediaType;

    title: string;

    originalTitle?: string;

    overview: string;

    poster: string | null;

    backdrop: string | null;

    rating: number | null;

    releaseDate: string | null;

    duration: string | null;

    episodes: number | null;

    genres: string[];

    watchedEpisodes?: number;

    status?:
    | "PLAN_TO_WATCH"
    | "WATCHING"
    | "COMPLETED"
    | "ON_HOLD"
    | "DROPPED";

}