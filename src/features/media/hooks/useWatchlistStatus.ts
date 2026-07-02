import { useQuery } from "@tanstack/react-query";

import { getWatchlistStatus } from "../api/watchlistApi";
import type { MediaType } from "../types";

export function useWatchlistStatus(
    type: MediaType,
    id: number
) {
    return useQuery({
        queryKey: ["watchlist-status", type, id],

        queryFn: () =>
            getWatchlistStatus(type, id),

        staleTime: 1000 * 60,
    });
}