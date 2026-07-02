import { useQuery } from "@tanstack/react-query";

import { getMedia } from "../api/mediaApi";
import type { MediaType } from "../types/types";

export function useMedia(
    type: MediaType,
    id: number
) {
    return useQuery({
        queryKey: ["media", type, id],

        queryFn: () => getMedia(type, id),

        enabled: !!type && !!id,

        staleTime: 1000 * 60 * 10,
    });
}