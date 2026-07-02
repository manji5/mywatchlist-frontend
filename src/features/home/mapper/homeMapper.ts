import type { Media } from "@/features/media/types";
import type { HomeMedia } from "../types";

export function mapTrendingToMedia(
    type: "movie" | "series" | "anime",
    response: any
): Media[] {

    switch (type) {

        case "movie":
            return response.results.map((item: any) => ({
                id: item.id,
                type: "movie",
                title: item.title,
                originalTitle: item.original_title,
                overview: item.overview,
                poster: item.poster_path,
                backdrop: item.backdrop_path,
                rating: item.vote_average,
                releaseDate: item.releaseDate,
                duration: item.duration?.toString() ?? null,
                episodes: null,
                genres: [],
            }));

        case "series":
            return response.results.map((item: any) => ({
                id: item.id,
                type: "series",
                title: item.title,
                originalTitle: item.original_title,
                overview: item.overview,
                poster: item.poster_path,
                backdrop: item.backdrop_path,
                rating: item.vote_average,
                releaseDate: item.releaseDate,
                duration: null,
                episodes: item.episodes,
                genres: [],
            }));

        case "anime":
            return response.data.map((item: any) => ({
                id: item.mal_id,
                type: "anime",
                title: item.title,
                originalTitle: item.title_japanese,
                overview: item.synopsis,
                poster: item.images.jpg.image_url,
                backdrop: item.images.jpg.large_image_url,
                rating: item.score,
                releaseDate: null,
                duration: item.duration,
                episodes: item.episodes,
                genres: [],
            }));

    }

}

export function mapHomeMedia(
    response: any[]
): HomeMedia[] {

    return response.map((item) => ({
        id: item.id,
        externalId: item.externalId,

        type: item.type,

        title: item.title,

        poster: item.posterUrl,

        backdrop: item.backdropUrl,

        score: item.score,

        watchedEpisodes:
            item.watchedEpisodes,

        totalEpisodes:
            item.totalEpisodes,

        progress: item.progress,
    }));

}