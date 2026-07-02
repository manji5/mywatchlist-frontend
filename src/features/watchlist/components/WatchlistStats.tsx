import {
    Clock3,
    Film,
    Tv,
    Clapperboard,
} from "lucide-react";

import type { WatchlistItem } from "../types";

interface Props {
    items: WatchlistItem[];
}

export default function WatchlistStats({
    items,
}: Props) {

    const movies = items.filter(
        (i) => i.type === "MOVIE"
    ).length;

    const series = items.filter(
        (i) => i.type === "TV_SERIES"
    ).length;

    const anime = items.filter(
        (i) => i.type === "ANIME"
    ).length;

    const totalMinutes = items.reduce(
        (sum, item) =>
            sum + item.totalWatchedMinutes,
        0
    );

    const hours = Math.floor(
        totalMinutes / 60
    );

    return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            <StatCard
                icon={<Film className="h-5 w-5" />}
                title="Movies"
                value={movies}
            />

            <StatCard
                icon={<Tv className="h-5 w-5" />}
                title="Series"
                value={series}
            />

            <StatCard
                icon={<Clapperboard className="h-5 w-5" />}
                title="Anime"
                value={anime}
            />

            <StatCard
                icon={<Clock3 className="h-5 w-5" />}
                title="Watch Time"
                value={`${hours}h`}
            />

        </div>
    );
}

interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    value: string | number;
}

function StatCard({
    icon,
    title,
    value,
}: StatCardProps) {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#151F2E] p-5">

            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400">
                {icon}
            </div>

            <p className="text-sm text-slate-400">
                {title}
            </p>

            <h2 className="mt-2 text-3xl font-bold">
                {value}
            </h2>

        </div>
    );
}