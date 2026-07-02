import { useQuery } from "@tanstack/react-query";
import { searchMedia } from "./api";

export function useSearchMedia(query: string) {
    return useQuery({
        queryKey: ["search", query],
        queryFn: () => searchMedia(query),
        enabled: query.trim().length > 1,
    });
}