import MediaCarousel from "../carousel/MediaCarousel";

import { useTrending } from "@/features/media/hooks/useTrending";
import { useRecentlyAdded } from "../../hooks/useRecentlyAdded";

import type { HomeSectionType } from "../../types";
import type { MediaCardData } from "@/types/media";

interface Props {
    title: string;
    type: HomeSectionType;
}

export default function HomeSection({
    title,
    type,
}: Props) {
    const trending = useTrending(
        type === "watchlist" ? "movie" : type
    );

    const recent = useRecentlyAdded();

    let items: MediaCardData[] = [];

    if (type === "watchlist") {
        items =
            recent.data?.map((item) => ({
                id: Number(item.externalId),
                title: item.title,
                poster: item.poster,
                rating: item.score,
                year: null,
                duration: null,
                episodes: item.totalEpisodes,
                type: item.type === "MOVIE"
                    ? "movie"
                    : item.type === "TV_SERIES"
                        ? "series"
                        : "anime",
            })) ?? [];
    } else {
        items = trending.data ?? [];
    }

    return (
        <section>
            <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                    {title}
                </h2>

                <button className="text-sm text-sky-400 hover:text-sky-300">
                    View All →
                </button>
            </div>

            <MediaCarousel items={items} />
        </section>
    );
}