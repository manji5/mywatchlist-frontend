import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import { useContinueWatching } from "../../hooks/useContinueWatching";
import ContinueWatchingCard from "./ContinueWatchingCard";

export default function ContinueWatchingRow() {
    const { data = [] } = useContinueWatching();

    const ref =
        useRef<HTMLDivElement>(null);

    function left() {
        ref.current?.scrollBy({
            left: -700,
            behavior: "smooth",
        });
    }

    function right() {
        ref.current?.scrollBy({
            left: 700,
            behavior: "smooth",
        });
    }

    if (!data.length) {
        return null;
    }

    return (
        <section>

            <div className="mb-6 flex items-center justify-between">

                <div>

                    <h2 className="text-3xl font-bold">
                        Continue Watching
                    </h2>

                    <p className="mt-1 text-slate-400">
                        Pick up where you left off.
                    </p>

                </div>

                <button className="text-sm font-medium text-sky-400 transition hover:text-sky-300">
                    View All →
                </button>

            </div>

            <div className="group relative">

                <button
                    onClick={left}
                    className="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/70 p-3 opacity-0 transition group-hover:opacity-100 lg:block"
                >
                    <ChevronLeft />
                </button>

                <div
                    ref={ref}
                    className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
                >
                    {data.map((media) => (

                        <ContinueWatchingCard
                            key={media.id}
                            media={media}
                        />

                    ))}
                </div>

                <button
                    onClick={right}
                    className="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/70 p-3 opacity-0 transition group-hover:opacity-100 lg:block"
                >
                    <ChevronRight />
                </button>

            </div>

        </section>
    );
}