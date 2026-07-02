import { useQuery } from "@tanstack/react-query";

import { getWatchlist } from "../api/watchlistApi";
import { mapWatchlistResponse } from "../mapper/watchlistMapper";

export function useWatchlist() {
    return useQuery({
        queryKey: ["watchlist"],

        queryFn: async () => {
            const data = await getWatchlist();

            return mapWatchlistResponse(data);
        },

        staleTime: 1000 * 60 * 5,
    });
}