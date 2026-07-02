import { useQueryClient } from "@tanstack/react-query";
import { Check, Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import {
    useDecrementProgress,
    useIncrementProgress,
    useSetProgress,
} from "../../hooks/useUpdateProgress";

import type { MediaType } from "../../types";

interface Props {
    mediaId: number;
    mediaType: MediaType;
    totalEpisodes: number;
    watchedEpisodes: number;
}

export default function EpisodeProgress({
    mediaId,
    mediaType,
    totalEpisodes,
    watchedEpisodes,
}: Props) {
    const queryClient = useQueryClient();

    const incrementMutation = useIncrementProgress();
    const decrementMutation = useDecrementProgress();
    const setMutation = useSetProgress();

    const [value, setValue] = useState(watchedEpisodes);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        setValue(watchedEpisodes);
    }, [watchedEpisodes]);

    async function refresh() {
        await queryClient.invalidateQueries({
            queryKey: [
                "watchlist-status",
                mediaType,
                mediaId,
            ],
        });
    }

    async function increase() {
        if (value >= totalEpisodes) return;

        await incrementMutation.mutateAsync({
            type: mediaType,
            id: mediaId,
        });

        await refresh();
    }

    async function decrease() {
        if (value <= 0) return;

        await decrementMutation.mutateAsync({
            type: mediaType,
            id: mediaId,
        });

        await refresh();
    }

    async function save() {
        let next = value;

        if (next < 0) next = 0;

        if (totalEpisodes > 0 && next > totalEpisodes) {
            next = totalEpisodes;
        }

        setValue(next);

        await setMutation.mutateAsync({
            type: mediaType,
            id: mediaId,
            value: next,
        });

        await refresh();

        setEditing(false);
    }

    const percent =
        totalEpisodes > 0
            ? (value / totalEpisodes) * 100
            : 0;

    const completed =
        totalEpisodes > 0 &&
        value === totalEpisodes;

    return (
        <div className="space-y-4">

            <div className="flex items-center justify-between">

                <p className="text-sm font-semibold text-slate-300">
                    Episodes
                </p>

                {completed ? (
                    <div className="flex items-center gap-1 text-sm font-semibold text-emerald-400">
                        <Check className="h-4 w-4" />
                        Completed
                    </div>
                ) : (
                    <span className="text-sm font-semibold text-sky-400">
                        {Math.round(percent)}%
                    </span>
                )}

            </div>

            <div className="flex items-center justify-center gap-4">

                <Button
                    size="icon"
                    variant="outline"
                    onClick={decrease}
                    disabled={
                        decrementMutation.isPending ||
                        value <= 0
                    }
                    className="h-11 w-11 rounded-xl border-white/10 bg-[#151F2E] transition hover:border-sky-500 hover:bg-sky-500 hover:text-white"
                >
                    <Minus className="h-4 w-4" />
                </Button>

                <div className="flex items-center gap-2 text-xl font-bold">

                    {editing ? (
                        <input
                            autoFocus
                            type="number"
                            value={value}
                            min={0}
                            max={totalEpisodes}
                            onChange={(e) =>
                                setValue(
                                    Number(e.target.value)
                                )
                            }
                            onBlur={save}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    save();
                                }
                            }}
                            className="w-16 rounded-lg border border-sky-500 bg-[#151F2E] text-center outline-none"
                        />
                    ) : (
                        <span
                            onClick={() =>
                                setEditing(true)
                            }
                            className="cursor-pointer rounded-lg px-2 py-1 transition hover:bg-white/10"
                        >
                            {value}
                        </span>
                    )}

                    <span className="text-slate-500">
                        /
                    </span>

                    <span className="text-slate-300">
                        {totalEpisodes}
                    </span>

                </div>

                <Button
                    size="icon"
                    variant="outline"
                    onClick={increase}
                    disabled={
                        incrementMutation.isPending ||
                        value >= totalEpisodes
                    }
                    className="h-11 w-11 rounded-xl border-white/10 bg-[#151F2E] transition hover:border-sky-500 hover:bg-sky-500 hover:text-white"
                >
                    <Plus className="h-4 w-4" />
                </Button>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/10">

                <div
                    className={`h-full rounded-full transition-all duration-500 ${completed
                            ? "bg-emerald-500"
                            : "bg-sky-500"
                        }`}
                    style={{
                        width: `${percent}%`,
                    }}
                />

            </div>

        </div>
    );
}