import { useMutation } from "@tanstack/react-query";

import { addToWatchlist } from "../api/watchlistApi";

export function useAddWatchlist() {
    return useMutation({
        mutationFn: ({
            type,
            id,
        }: {
            type: "movie" | "series" | "anime";
            id: number;
        }) => addToWatchlist(type, id),
    });
}