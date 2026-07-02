import { useMemo, useState } from "react";

import WatchlistFilters from "@/features/watchlist/components/WatchlistFilters";
import WatchlistGrid from "@/features/watchlist/components/WatchlistGrid";
import WatchlistStats from "@/features/watchlist/components/WatchlistStats";
import { useWatchlist } from "@/features/watchlist/hooks/useWatchlist";

import type {
    MediaType,
    WatchStatus,
    WatchlistSort,
} from "@/features/watchlist/types";

export default function Watchlist() {
    const {
        data = [],
        isLoading,
        isError,
    } = useWatchlist();

    const [search, setSearch] =
        useState("");

    const [type, setType] =
        useState<MediaType | "ALL">("ALL");

    const [status, setStatus] =
        useState<WatchStatus | "ALL">("ALL");

    const [sort, setSort] =
        useState<WatchlistSort>("RECENT");

    const filteredItems = useMemo(() => {

        const items = data.filter((item) => {

            const matchesType =
                type === "ALL" ||
                item.type === type;

            const matchesStatus =
                status === "ALL" ||
                item.status === status;

            const matchesSearch =
                item.title
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    );

            return (
                matchesType &&
                matchesStatus &&
                matchesSearch
            );

        });

        switch (sort) {

            case "TITLE":
                items.sort((a, b) =>
                    a.title.localeCompare(
                        b.title
                    )
                );
                break;

            case "RATING":
                items.sort(
                    (a, b) =>
                        (b.score ?? 0) -
                        (a.score ?? 0)
                );
                break;

            case "PROGRESS":
                items.sort(
                    (a, b) =>
                        b.watchedEpisodes -
                        a.watchedEpisodes
                );
                break;

            case "WATCH_TIME":
                items.sort(
                    (a, b) =>
                        b.totalWatchedMinutes -
                        a.totalWatchedMinutes
                );
                break;

            case "RECENT":
            default:
                break;

        }

        return items;

    }, [
        data,
        search,
        type,
        status,
        sort,
    ]);

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                Loading...
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                Failed to load watchlist.
            </div>
        );
    }

    return (
        <main className="mx-auto w-full max-w-7xl px-6 py-10">

            <header className="mb-10">

                <h1 className="text-4xl font-bold">
                    My List
                </h1>

                <p className="mt-2 text-slate-400">
                    Track everything you're watching.
                </p>



                <div className="mt-8">

                    <WatchlistStats
                        items={filteredItems}
                    />

                </div>
            </header>

            <WatchlistFilters
                search={search}
                onSearchChange={setSearch}
                type={type}
                onTypeChange={setType}
                status={status}
                onStatusChange={setStatus}
                sort={sort}
                onSortChange={setSort}
            />

            <div className="mt-8">

                <WatchlistGrid
                    items={filteredItems}
                />

            </div>

        </main>
    );
}