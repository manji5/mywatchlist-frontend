import { useQueryClient } from "@tanstack/react-query";
import { BookmarkPlus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useAddWatchlist } from "../../hooks/useAddWatchlist";
import { useUpdateStatus } from "../../hooks/useUpdateStatus";
import { useWatchlistStatus } from "../../hooks/useWatchlistStatus";

import type { Media, MediaType } from "../../types";

import EpisodeProgress from "./EpisodeProgress";

interface Props {
    media: Media;
    type: MediaType;
}

const STATUS = [
    "PLAN_TO_WATCH",
    "WATCHING",
    "COMPLETED",
    "ON_HOLD",
    "DROPPED",
] as const;

export default function HeroActions({
    media,
    type,
}: Props) {
    const queryClient = useQueryClient();

    const addMutation = useAddWatchlist();

    const statusMutation = useUpdateStatus();

    const { data } = useWatchlistStatus(
        type,
        media.id
    );

    const saved = data?.saved ?? false;

    const status =
        data?.status ?? "PLAN_TO_WATCH";

    async function handleAdd() {
        await addMutation.mutateAsync({
            type,
            id: media.id,
        });

        await queryClient.invalidateQueries({
            queryKey: [
                "watchlist-status",
                type,
                media.id,
            ],
        });
    }

    async function handleStatus(value: string) {
        await statusMutation.mutateAsync({
            type,
            id: media.id,
            status: value,
        });

        await queryClient.invalidateQueries({
            queryKey: [
                "watchlist-status",
                type,
                media.id,
            ],
        });
    }

    if (!saved) {
        return (
            <Button
                size="lg"
                onClick={handleAdd}
                disabled={addMutation.isPending}
                className="h-12 rounded-xl px-8"
            >
                <BookmarkPlus className="mr-2 h-5 w-5" />
                Add to Watchlist
            </Button>
        );
    }

    return (
        <div className="flex max-w-xs flex-col gap-3">
            <label className="text-sm font-medium text-slate-300">
                Status
            </label>

            <select
                value={status}
                onChange={(e) =>
                    handleStatus(e.target.value)
                }
                disabled={statusMutation.isPending}
                className="h-12 rounded-xl border border-white/10 bg-[#151F2E] px-4 text-white outline-none transition focus:border-sky-500"
            >
                {STATUS.map((item) => (
                    <option
                        key={item}
                        value={item}
                    >
                        {item.replaceAll("_", " ")}
                    </option>
                ))}
            </select>

            {type !== "movie" && (
                <EpisodeProgress
                    mediaId={media.id}
                    mediaType={type}
                    totalEpisodes={media.episodes ?? 0}
                    watchedEpisodes={
                        data?.watchedEpisodes ?? 0
                    }
                />
            )}
        </div>
    );
}