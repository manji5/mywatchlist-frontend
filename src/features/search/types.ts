export const SEARCH_TYPES = {
    MOVIE: "movie",
    SERIES: "series",
    ANIME: "anime",
} as const;

export type SearchType =
    typeof SEARCH_TYPES[keyof typeof SEARCH_TYPES];

export interface SearchItem {
    id: number;
    title: string;
    poster: string | null;
    rating: number | null;
    year: string | null;
    duration: string | null;
    episodes: number | null;

    type: SearchType;
}