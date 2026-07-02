export type MediaType = "movie" | "series" | "anime";

export interface MediaCardData {
    id: number;
    title: string;
    poster: string | null;
    rating: number | null;
    year: string | null;
    duration: string | null;
    episodes: number | null;
    type: MediaType;
}