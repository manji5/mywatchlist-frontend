import {
    CalendarDays,
    Clock3,
    Film,
    Star,
    Tv,
} from "lucide-react";

import type { Media } from "../../types";

interface Props {
    media: Media;
}

export default function MediaInformation({ media }: Props) {
    const items = [
        {
            icon: <Star className="h-5 w-5 text-yellow-400" />,
            label: "Rating",
            value:
                media.rating != null
                    ? `${media.rating.toFixed(1)} / 10`
                    : "-",
        },
        {
            icon: <CalendarDays className="h-5 w-5 text-sky-400" />,
            label: "Release",
            value: media.releaseDate
                ? media.releaseDate.substring(0, 4)
                : "-",
        },
        {
            icon: <Clock3 className="h-5 w-5 text-sky-400" />,
            label: "Duration",
            value: media.duration ?? "-",
        },
        {
            icon: <Tv className="h-5 w-5 text-sky-400" />,
            label: "Episodes",
            value: media.episodes ?? "-",
        },
        {
            icon: <Film className="h-5 w-5 text-sky-400" />,
            label: "Genres",
            value:
                media.genres.length > 0
                    ? media.genres.join(", ")
                    : "-",
        },
    ];

    return (
        <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
                Information
            </h2>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {items.map((item) => (
                    <div
                        key={item.label}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#151F2E] p-5 transition hover:border-sky-500/40"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10">
                            {item.icon}
                        </div>

                        <div>
                            <p className="text-sm text-slate-400">
                                {item.label}
                            </p>

                            <p className="font-semibold text-white">
                                {item.value}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}