import { useQuery } from "@tanstack/react-query";

import {
    getTrendingAnime,
    getTrendingMovies,
    getTrendingSeries,
} from "../api/trendingApi";

import { mapSearchResponse } from "src/features/search/mapper/searchMapper";

import type { MediaType } from "../types";

export function useTrending(type: MediaType) {
    return useQuery({
        queryKey: ["trending", type],

        queryFn: async () => {
            if (type === "movie") {
                return mapSearchResponse(
                    "movie",
                    await getTrendingMovies()
                );
            }

            if (type === "series") {
                return mapSearchResponse(
                    "series",
                    await getTrendingSeries()
                );
            }

            return mapSearchResponse(
                "anime",
                await getTrendingAnime()
            );
        },

        staleTime: 1000 * 60 * 10,
    });
}