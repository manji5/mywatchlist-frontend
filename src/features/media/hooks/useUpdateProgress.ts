import { useMutation } from "@tanstack/react-query";

import {
    decrementProgress,
    incrementProgress,
    setProgress,
} from "../api/watchlistApi";

import type { MediaType } from "../types";

export function useIncrementProgress() {
    return useMutation({
        mutationFn: ({
            type,
            id,
        }: {
            type: MediaType;
            id: number;
        }) =>
            incrementProgress(type, id),
    });
}

export function useDecrementProgress() {
    return useMutation({
        mutationFn: ({
            type,
            id,
        }: {
            type: MediaType;
            id: number;
        }) =>
            decrementProgress(type, id),
    });
}

export function useSetProgress() {
    return useMutation({
        mutationFn: ({
            type,
            id,
            value,
        }: {
            type: MediaType;
            id: number;
            value: number;
        }) =>
            setProgress(type, id, value),
    });
}