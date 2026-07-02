export type MediaType = "ANIME" | "MOVIE" | "SERIES";

export interface MediaCardData {
    id: number;
    title: string;
    poster: string;
    score: number;
    year: string;
    type: MediaType;
}