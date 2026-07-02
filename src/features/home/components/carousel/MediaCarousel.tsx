import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import MediaCard from "@/components/media/MediaCard";
import type { MediaCardData } from "@/types/media";

interface Props {
    items: MediaCardData[];
}

export default function MediaCarousel({
    items,
}: Props) {
    const ref =
        useRef<HTMLDivElement>(null);

    function scrollLeft() {
        ref.current?.scrollBy({
            left: -900,
            behavior: "smooth",
        });
    }

    function scrollRight() {
        ref.current?.scrollBy({
            left: 900,
            behavior: "smooth",
        });
    }

    if (!items.length) {
        return (
            <div className="flex gap-6 overflow-hidden">
                {Array.from({
                    length: 6,
                }).map((_, index) => (
                    <div
                        key={index}
                        className="aspect-[2/3] w-44 animate-pulse rounded-2xl bg-[#151F2E]"
                    />
                ))}
            </div>
        );
    }

    return (
        <div className="group relative">

            <button
                onClick={scrollLeft}
                className="absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/70 p-3 opacity-0 transition group-hover:opacity-100 lg:block"
            >
                <ChevronLeft />
            </button>

            <div
                ref={ref}
                className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
            >
                {items.map((media) => (
                    <div
                        key={media.id}
                        className="w-44 flex-shrink-0"
                    >
                        <MediaCard
                            media={media}
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={scrollRight}
                className="absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/70 p-3 opacity-0 transition group-hover:opacity-100 lg:block"
            >
                <ChevronRight />
            </button>

        </div>
    );
}