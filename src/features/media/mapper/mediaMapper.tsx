import type { Media, MediaType } from "../types/types";

export function mapMedia(
    type: MediaType,
    item: any
): Media {

    if (type === "anime") {

        return {

            id: item.malId ?? item.mal_id,

            title: item.title,

            originalTitle: item.titleEnglish ?? item.title_english,

            overview: item.synopsis,

            poster:
                item.images?.jpg?.largeImageUrl ??
                item.images?.jpg?.large_image_url ??
                item.images?.jpg?.imageUrl ??
                item.images?.jpg?.image_url ??
                null,

            backdrop:
                item.images?.jpg?.largeImageUrl ??
                item.images?.jpg?.large_image_url ??
                item.images?.jpg?.imageUrl ??
                item.images?.jpg?.image_url ??
                null,

            rating: item.score,

            releaseDate: null,

            duration: item.duration,

            episodes: item.episodes,

            genres:
                item.genres?.map((g: any) => g.name) ?? [],

            watchedEpisodes:
                item.watchedEpisodes ??
                item.watched_episodes ??
                0,

            status:
                item.status ??
                "PLAN_TO_WATCH",

        };

    }

    return {

        id: item.id,

        title: item.title,

        originalTitle: item.originalTitle,

        overview: item.overview,

        poster: item.posterPath ?? item.poster_path ?? null,

        backdrop: item.backdropPath ?? item.backdrop_path ?? null,

        rating: item.voteAverage ?? item.vote_average ?? null,

        releaseDate: item.releaseDate ?? item.release_date ?? null,

        duration:
            item.duration?.toString() ??
            item.runtime?.toString() ??
            null,

        episodes:
            item.episodes ??
            item.number_of_episodes ??
            null,

        genres:
            item.genres?.map((g: any) => g.name) ?? [],

        watchedEpisodes:
            item.watchedEpisodes ??
            item.watched_episodes ??
            0,

        status:
            item.status ??
            "PLAN_TO_WATCH",

    };


}
