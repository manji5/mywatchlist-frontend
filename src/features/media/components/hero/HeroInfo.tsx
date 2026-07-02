import {
    CalendarDays,
    Clock3,
    Star,
    Tv,
} from "lucide-react";

import type { Media } from "../../types";

interface Props {
    media: Media;
}

export default function HeroInfo({ media }: Props) {
    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                    {media.title}
                </h1>

                {media.originalTitle &&
                    media.originalTitle !== media.title && (
                        <p className="text-lg text-slate-300 md:text-xl">
                            {media.originalTitle}
                        </p>
                    )}
            </div>

            <div className="flex flex-wrap items-center gap-5 text-sm text-slate-200 md:text-base">
                {media.rating != null && (
                    <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span>{media.rating.toFixed(1)}</span>
                    </div>
                )}

                {media.releaseDate && (
                    <div className="flex items-center gap-2">
                        <CalendarDays className="h-5 w-5 text-sky-400" />
                        <span>{media.releaseDate?.substring(0, 4)}</span>
                    </div>
                )}

                {media.duration && (
                    <div className="flex items-center gap-2">
                        <Clock3 className="h-5 w-5 text-sky-400" />
                        <span>{media.duration}</span>
                    </div>
                )}

                {media.episodes != null && (
                    <div className="flex items-center gap-2">
                        <Tv className="h-5 w-5 text-sky-400" />
                        <span>{media.episodes} Episodes</span>
                    </div>
                )}
            </div>

            {media.genres.length > 0 && (
                <div className="flex flex-wrap gap-3">
                    {media.genres.map((genre) => (
                        <span
                            key={genre}
                            className="rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-300"
                        >
                            {genre}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}