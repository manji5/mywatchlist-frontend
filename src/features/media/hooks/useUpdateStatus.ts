import { useMutation } from "@tanstack/react-query";

import { updateWatchStatus } from "../api/watchlistApi";

import type { MediaType } from "../types";

export function useUpdateStatus() {
    return useMutation({
        mutationFn: ({
            type,
            id,
            status,
        }: {
            type: MediaType;
            id: number;
            status: string;
        }) =>
            updateWatchStatus(
                type,
                id,
                status
            ),
    });
}