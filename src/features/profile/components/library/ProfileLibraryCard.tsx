import { Link } from "react-router-dom";
import {
    CheckCircle2,
    Clock3,
    Pause,
    PlayCircle,
    XCircle,
} from "lucide-react";

import type { WatchlistItem } from "@/features/watchlist/types";

interface Props {
    item: WatchlistItem;
}

export default function ProfileLibraryCard({
    item,
}: Props) {
    return (
        <Link
            to={`/media/${mapType(item.type)}/${item.externalId}`}
            className="group"
        >
            <article className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#151F2E] p-3 transition-all hover:border-sky-500/40 hover:bg-[#182335]">

                <img
                    src={item.poster}
                    alt={item.title}
                    className="h-24 w-16 rounded-lg object-cover"
                />

                <div className="min-w-0 flex-1">

                    <h3 className="truncate text-lg font-semibold">
                        {item.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-3 text-sm text-slate-400">

                        <span>
                            {formatType(item.type)}
                        </span>

                        {item.score && (
                            <>
                                <span>•</span>

                                <span>
                                    ⭐ {item.score.toFixed(1)}
                                </span>
                            </>
                        )}

                    </div>

                </div>

                <StatusBadge status={item.status} />

            </article>
        </Link>
    );
}

interface BadgeProps {
    status: WatchlistItem["status"];
}

function StatusBadge({
    status,
}: BadgeProps) {

    switch (status) {

        case "WATCHING":
            return (
                <Badge
                    icon={<PlayCircle size={16} />}
                    label="Watching"
                    color="bg-sky-500/15 text-sky-400"
                />
            );

        case "COMPLETED":
            return (
                <Badge
                    icon={<CheckCircle2 size={16} />}
                    label="Completed"
                    color="bg-emerald-500/15 text-emerald-400"
                />
            );

        case "PLAN_TO_WATCH":
            return (
                <Badge
                    icon={<Clock3 size={16} />}
                    label="Planned"
                    color="bg-yellow-500/15 text-yellow-400"
                />
            );

        case "ON_HOLD":
            return (
                <Badge
                    icon={<Pause size={16} />}
                    label="On Hold"
                    color="bg-orange-500/15 text-orange-400"
                />
            );

        case "DROPPED":
            return (
                <Badge
                    icon={<XCircle size={16} />}
                    label="Dropped"
                    color="bg-red-500/15 text-red-400"
                />
            );

    }

}

interface PropsBadge {
    icon: React.ReactNode;
    label: string;
    color: string;
}

function Badge({
    icon,
    label,
    color,
}: PropsBadge) {
    return (
        <div className={`hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-medium md:flex ${color}`}>
            {icon}
            {label}
        </div>
    );
}

function formatType(type: string) {

    switch (type) {

        case "MOVIE":
            return "Movie";

        case "TV_SERIES":
            return "Series";

        case "ANIME":
            return "Anime";

        default:
            return type;

    }

}

function mapType(type: string) {

    switch (type) {

        case "MOVIE":
            return "movie";

        case "TV_SERIES":
            return "series";

        case "ANIME":
            return "anime";

        default:
            return "movie";

    }

}