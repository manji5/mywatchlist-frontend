import type { SearchType } from "../types";
import type { SearchItem } from "../types";

export function mapSearchResponse(
    type: SearchType,
    response: any
): SearchItem[] {

    switch (type) {

        case "movie":
            return response.results.map((item: any) => ({
                id: item.id,
                title: item.title,
                poster: item.poster_path ?? null,
                rating: item.vote_average ?? null,
                year: item.releaseDate
                    ? item.releaseDate.substring(0, 4)
                    : null,
                duration: item.duration?.toString() ?? null,
                episodes: item.episodes ?? null,
                type: "movie",
            }));

        case "series":
            return response.results.map((item: any) => ({
                id: item.id,
                title: item.title,
                poster: item.poster_path ?? null,
                rating: item.vote_average ?? null,
                year: item.releaseDate
                    ? item.releaseDate.substring(0, 4)
                    : null,
                duration: item.duration?.toString() ?? null,
                episodes: item.episodes ?? null,
                type: "series",
            }));

        case "anime":

            return response.data.map((item: any) => ({
                id: item.mal_id,
                title: item.title,
                poster: item.images?.jpg?.image_url ?? null,
                rating: item.score,
                year: null,
                duration: item.duration,
                episodes: item.episodes,
                type: "anime",
            }));



    }

}