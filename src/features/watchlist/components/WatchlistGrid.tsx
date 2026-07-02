import WatchlistCard from "./WatchlistCard";

import type { WatchlistItem } from "../types";

interface Props {
    items: WatchlistItem[];
}

export default function WatchlistGrid({
    items,
}: Props) {

    if (!items.length) {
        return (
            <div className="flex h-80 items-center justify-center rounded-2xl border border-dashed border-white/10">
                <p className="text-slate-400">
                    Your watchlist is empty.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {items.map((item) => (
                <WatchlistCard
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    );
}