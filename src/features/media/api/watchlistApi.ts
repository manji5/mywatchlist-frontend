import { api } from "@/lib/api";

import type { MediaType } from "../types";

export async function addToWatchlist(
    type: MediaType,
    id: number
) {
    const { data } = await api.post(
        `/media/save/${type}/${id}`
    );

    return data;
}

export async function getWatchlistStatus(
    type: MediaType,
    id: number
) {
    const { data } = await api.get(
        `/media/${type}/${id}/watchlist`
    );

    return data;
}

export async function updateWatchStatus(
    type: MediaType,
    id: number,
    status: string
) {
    const { data } = await api.patch(
        `/media/${type}/${id}/status`,
        null,
        {
            params: {
                status,
            },
        }
    );

    return data;
}

export async function incrementProgress(
    type: MediaType,
    id: number
) {
    const { data } = await api.patch(
        `/media/${type}/${id}/progress`,
        {
            action: "INCREMENT",
        }
    );

    return data;
}

export async function decrementProgress(
    type: MediaType,
    id: number
) {
    const { data } = await api.patch(
        `/media/${type}/${id}/progress`,
        {
            action: "DECREMENT",
        }
    );

    return data;
}

export async function setProgress(
    type: MediaType,
    id: number,
    value: number
) {
    const { data } = await api.patch(
        `/media/${type}/${id}/progress`,
        {
            action: "SET",
            value,
        }
    );

    return data;
}