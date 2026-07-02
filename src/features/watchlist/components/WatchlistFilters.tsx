import { Search } from "lucide-react";

import type {
    MediaType,
    WatchStatus,
    WatchlistSort,
} from "../types";

interface Props {
    search: string;
    onSearchChange: (value: string) => void;

    type: MediaType | "ALL";
    onTypeChange: (
        value: MediaType | "ALL"
    ) => void;

    status: WatchStatus | "ALL";
    onStatusChange: (
        value: WatchStatus | "ALL"
    ) => void;

    sort: WatchlistSort;
    onSortChange: (
        value: WatchlistSort
    ) => void;
}

const TYPES = [
    { value: "ALL", label: "All" },
    { value: "MOVIE", label: "Movies" },
    { value: "TV_SERIES", label: "Series" },
    { value: "ANIME", label: "Anime" },
] as const;

const STATUS = [
    { value: "ALL", label: "All" },
    { value: "WATCHING", label: "Watching" },
    { value: "PLAN_TO_WATCH", label: "Plan to Watch" },
    { value: "COMPLETED", label: "Completed" },
    { value: "ON_HOLD", label: "On Hold" },
    { value: "DROPPED", label: "Dropped" },
] as const;

export default function WatchlistFilters({
    search,
    onSearchChange,
    type,
    onTypeChange,
    status,
    onStatusChange,
    sort,
    onSortChange,
}: Props) {
    return (
        <div className="space-y-5">

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                <div className="flex flex-wrap gap-2">

                    {TYPES.map((item) => (
                        <button
                            key={item.value}
                            onClick={() =>
                                onTypeChange(item.value)
                            }
                            className={`rounded-full px-4 py-2 text-sm font-medium transition ${type === item.value
                                    ? "bg-sky-500 text-white"
                                    : "border border-white/10 bg-[#151F2E] text-slate-300 hover:border-sky-500/40"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}

                </div>

                <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">

                    <div className="relative sm:w-72">

                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                        <input
                            value={search}
                            onChange={(e) =>
                                onSearchChange(
                                    e.target.value
                                )
                            }
                            placeholder="Search..."
                            className="h-11 w-full rounded-xl border border-white/10 bg-[#151F2E] pl-10 pr-4 outline-none focus:border-sky-500"
                        />

                    </div>

                    <select
                        value={sort}
                        onChange={(e) =>
                            onSortChange(
                                e.target
                                    .value as WatchlistSort
                            )
                        }
                        className="h-11 rounded-xl border border-white/10 bg-[#151F2E] px-4 outline-none focus:border-sky-500"
                    >
                        <option value="RECENT">
                            Recently Added
                        </option>

                        <option value="TITLE">
                            Title
                        </option>

                        <option value="RATING">
                            Rating
                        </option>

                        <option value="PROGRESS">
                            Progress
                        </option>

                        <option value="WATCH_TIME">
                            Watch Time
                        </option>

                    </select>

                </div>

            </div>

            <div className="flex flex-wrap gap-2">

                {STATUS.map((item) => (
                    <button
                        key={item.value}
                        onClick={() =>
                            onStatusChange(item.value)
                        }
                        className={`rounded-full px-4 py-2 text-sm font-medium transition ${status === item.value
                                ? "bg-sky-500 text-white"
                                : "border border-white/10 bg-[#151F2E] text-slate-300 hover:border-sky-500/40"
                            }`}
                    >
                        {item.label}
                    </button>
                ))}

            </div>

        </div>
    );
}