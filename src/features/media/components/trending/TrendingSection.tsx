import MediaCard from "src/components/media/MediaCard";

import { useTrending } from "../../hooks/useTrending";
import type { MediaType } from "../../types";

interface Props {
    type: MediaType;
}

export default function TrendingSection({ type }: Props) {
    const { data, isLoading, isError } = useTrending(type);

    if (isLoading) {
        return (
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Trending</h2>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="aspect-[2/3] animate-pulse rounded-2xl bg-[#151F2E]"
                        />
                    ))}
                </div>
            </section>
        );
    }

    if (isError || !data || data.length === 0) {
        return null;
    }

    return (
        <section className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                    Trending {type.charAt(0).toUpperCase() + type.slice(1)}
                </h2>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {data.map((media) => (
                    <MediaCard
                        key={`${media.type}-${media.id}`}
                        media={media}
                    />
                ))}
            </div>
        </section>
    );
}