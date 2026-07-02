import { useQuery } from "@tanstack/react-query";

import { searchMedia } from "../api/searchApi";
import type { SearchType } from "../types";

export function useSearch(
    type: SearchType,
    query: string
) {
    return useQuery({
        queryKey: ["search", type, query],

        queryFn: () => searchMedia(type, query),

        enabled: query.trim().length >= 4,

        staleTime: 1000 * 60 * 5,
    });
}