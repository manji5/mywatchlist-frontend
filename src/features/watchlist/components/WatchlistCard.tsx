import { Link } from "react-router-dom";
import { Check, Clock3, Star } from "lucide-react";

import type { WatchlistItem } from "../types";

interface Props {
    item: WatchlistItem;
}

export default function WatchlistCard({
    item,
}: Props) {

    const percent =
        item.episodes > 0
            ? (item.watchedEpisodes / item.episodes) * 100
            : 0;

    const completed =
        item.status === "COMPLETED";

    return (
        <Link
            to={`/media/${mapType(item.type)}/${item.externalId}`}
            className="group"
        >
            <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#151F2E] transition hover:-translate-y-2 hover:border-sky-500 hover:shadow-2xl">

                <div className="relative">

                    <img
                        src={item.poster}
                        alt={item.title}
                        className="aspect-[2/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-xs font-semibold text-yellow-400 backdrop-blur">
                        <Star className="h-3.5 w-3.5 fill-yellow-400" />
                        {item.score?.toFixed(1) ?? "-"}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4">

                        <h3 className="line-clamp-2 text-base font-bold text-white">
                            {item.title}
                        </h3>

                    </div>

                </div>

                <div className="space-y-4 p-4">

                    <span className="inline-flex rounded-full bg-sky-500/15 px-3 py-1 text-xs font-semibold text-sky-400">
                        {item.status.replaceAll("_", " ")}
                    </span>

                    {item.type !== "MOVIE" ? (
                        <>
                            <div className="flex items-center justify-between text-sm">

                                <span>
                                    {item.watchedEpisodes}/{item.episodes}
                                </span>

                                {completed ? (
                                    <span className="flex items-center gap-1 text-emerald-400">
                                        <Check className="h-4 w-4" />
                                        Done
                                    </span>
                                ) : (
                                    <span className="text-slate-400">
                                        {Math.round(percent)}%
                                    </span>
                                )}

                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-white/10">

                                <div
                                    className={`h-full transition-all ${completed
                                            ? "bg-emerald-500"
                                            : "bg-sky-500"
                                        }`}
                                    style={{
                                        width: `${percent}%`,
                                    }}
                                />

                            </div>
                        </>
                    ) : (
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                            <Clock3 className="h-4 w-4" />
                            {Math.floor(item.totalWatchedMinutes / 60)}h
                        </div>
                    )}

                </div>

            </article>
        </Link>
    );
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