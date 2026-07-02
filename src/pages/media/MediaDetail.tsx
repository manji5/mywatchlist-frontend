import { useParams } from "react-router-dom";

import MediaHero from "@/features/media/components/hero/MediaHero";
import MediaInformation from "@/features/media/components/information/MediaInformation";
import MediaOverview from "@/features/media/components/overview/MediaOverview";
import TrendingSection from "@/features/media/components/trending/TrendingSection";

import { useMedia } from "@/features/media/hooks/useMedia";

import type { MediaType } from "@/features/media/types";

export default function MediaDetail() {
    const { type, id } = useParams();

    const mediaType = type as MediaType;
    const mediaId = Number(id);

    const { data, isLoading, isError } = useMedia(
        mediaType,
        mediaId
    );

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-sky-500 border-t-transparent" />
            </div>
        );
    }

    if (isError || !data) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center gap-4">
                <h1 className="text-3xl font-bold">
                    Media not found
                </h1>

                <p className="text-slate-400">
                    The requested content could not be loaded.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-[#0B101B] text-white">
            <MediaHero
                media={data}
                type={mediaType}
            />

            <main className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 py-16">
                <MediaOverview overview={data.overview} />

                <MediaInformation media={data} />

                <TrendingSection type={mediaType} />
            </main>
        </div>
    );
}