import { useMemo, useState } from "react";

import { useWatchlist } from "@/features/watchlist/hooks/useWatchlist";

import ProfileLibraryCard from "./ProfileLibraryCard";
import ProfileLibrarySearch from "./ProfileLibrarySearch";

export default function ProfileLibrary() {
    const {
        data: watchlist = [],
        isLoading,
    } = useWatchlist();

    const [search, setSearch] = useState("");
    const [type, setType] = useState("ALL");
    const [status, setStatus] = useState("ALL");

    const filteredItems = useMemo(() => {
        return watchlist.filter((item) => {
            const matchesSearch =
                item.title
                    .toLowerCase()
                    .includes(search.trim().toLowerCase());

            const matchesType =
                type === "ALL"
                    ? true
                    : item.type === type;

            const matchesStatus =
                status === "ALL"
                    ? true
                    : item.status === status;

            return (
                matchesSearch &&
                matchesType &&
                matchesStatus
            );
        });
    }, [
        watchlist,
        search,
        type,
        status,
    ]);

    return (
        <section className="mt-16">

            <div className="mb-8">

                <h2 className="text-3xl font-bold">
                    My Library
                </h2>

                <p className="mt-2 text-slate-400">
                    Search and browse everything in your library.
                </p>

            </div>

            <ProfileLibrarySearch
                value={search}
                onChange={setSearch}

                type={type}
                onTypeChange={setType}

                status={status}
                onStatusChange={setStatus}

                total={filteredItems.length}
            />

            {isLoading ? (
                <div className="flex justify-center py-20">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-sky-500 border-t-transparent" />
                </div>
            ) : filteredItems.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-white/10 bg-[#151F2E] py-16 text-center">

                    <h3 className="text-xl font-semibold">
                        No results found
                    </h3>

                    <p className="mt-2 text-slate-400">
                        Try a different search or filter.
                    </p>

                </div>
            ) : (
                <div className="space-y-4">

                    {filteredItems.map((item) => (
                        <ProfileLibraryCard
                            key={item.id}
                            item={item}
                        />
                    ))}

                </div>
            )}

        </section>
    );
}