import { Link } from "react-router-dom";
import { CalendarDays, Star } from "lucide-react";

import type { MediaCardData } from "@/types/media";


interface Props {
    media: MediaCardData;
}

export default function MediaCard({ media }: Props) {
    return (
        <Link
            to={`/media/${media.type}/${media.id}`}
            className="group block"
        >
            <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#151F2E] transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:shadow-2xl hover:shadow-sky-500/10">
                <div className="relative overflow-hidden">
                    <img
                        src={media.poster ?? ""}
                        alt={media.title}
                        loading="lazy"
                        className="aspect-[2/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70" />

                    <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-xs font-semibold text-yellow-400 backdrop-blur">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        {media.rating?.toFixed(1) ?? "-"}
                    </div>

                    <div className="absolute right-3 top-3 rounded-full bg-sky-500/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                        {media.type}
                    </div>
                </div>

                <div className="space-y-2 p-4">
                    <h3 className="line-clamp-2 min-h-[3.5rem] text-base font-bold text-white">
                        {media.title}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-slate-400">
                        <CalendarDays className="h-4 w-4" />

                        <span>{media.year ?? "Unknown"}</span>
                    </div>
                </div>
            </article>
        </Link>
    );
}