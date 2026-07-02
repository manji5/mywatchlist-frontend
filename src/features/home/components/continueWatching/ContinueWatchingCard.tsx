import { Link } from "react-router-dom";
import { ArrowRight, Play, Star } from "lucide-react";

import { Button } from "@/components/ui/button";

import type { HomeMedia } from "../../types";

interface Props {
    media: HomeMedia;
}

export default function ContinueWatchingCard({
    media,
}: Props) {
    const progress = Math.round(
        media.progress * 100
    );

    return (
        <article className="relative h-80 w-[760px] flex-shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-[#151F2E]">

            {(media.backdrop ?? media.poster) && (
                <img
                    src={media.backdrop ?? media.poster!}
                    alt={media.title}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            )}

            <div className="absolute inset-0 bg-gradient-to-r from-[#0B101B] via-[#0B101BF2] to-[#0B101B66]" />

            <div className="relative flex h-full items-center justify-between p-10">

                <div className="max-w-md">

                    <span className="rounded-full bg-sky-500/20 px-3 py-1 text-sm font-medium text-sky-400">
                        Continue Watching
                    </span>

                    <h2 className="mt-5 text-6xl font-bold">
                        {media.title}
                    </h2>

                    <div className="mt-5 flex items-center gap-5 text-slate-300">

                        {media.score && (
                            <div className="flex items-center gap-2">

                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

                                {media.score.toFixed(1)}

                            </div>
                        )}

                        <span>
                            {media.watchedEpisodes} / {media.totalEpisodes}
                        </span>

                    </div>

                    <div className="mt-8">

                        <div className="mb-2 flex justify-between text-sm text-slate-300">

                            <span>
                                Progress
                            </span>

                            <span>
                                {progress}%
                            </span>

                        </div>

                        <div className="h-4 overflow-hidden rounded-full bg-white/10">

                            <div
                                className="h-full rounded-full bg-sky-500 transition-all"
                                style={{
                                    width: `${progress}%`,
                                }}
                            />

                        </div>

                    </div>

                    <div className="mt-8 flex gap-4">

                        <Button asChild>

                            <Link
                                to={`/media/${mapType(media.type)}/${media.externalId}`}
                            >
                                <Play className="mr-2 h-4 w-4 fill-white" />

                                Continue Watching

                            </Link>

                        </Button>

                        <Button
                            variant="secondary"
                            asChild
                        >

                            <Link
                                to={`/media/${mapType(media.type)}/${media.externalId}`}
                            >
                                Details

                                <ArrowRight className="ml-2 h-4 w-4" />

                            </Link>

                        </Button>

                    </div>

                </div>

                <img
                    src={media.poster ?? ""}
                    alt={media.title}
                    className="hidden h-72 rounded-2xl shadow-2xl lg:block"
                />

            </div>

        </article>
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