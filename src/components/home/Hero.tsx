import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";

export default function Hero() {
    const navigate = useNavigate();

    const [query, setQuery] = useState("");

    function handleSearch() {
        if (!query.trim()) return;

        navigate(`/search?q=${encodeURIComponent(query)}`);
    }

    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#38bdf822,transparent_60%)]" />

            <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
                <span className="mb-6 rounded-full border border-sky-500/20 bg-sky-500/10 px-5 py-2 text-sm text-sky-400">
                    Movies • TV Series • Anime
                </span>

                <h1 className="max-w-5xl text-6xl font-bold leading-tight tracking-tight text-white md:text-7xl">
                    Track everything
                    <br />
                    you love to watch.
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                    Build your personal watchlist, track your progress and discover your
                    next favorite movie, TV series or anime.
                </p>

                <div className="mt-12 flex w-full max-w-3xl gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                    <Input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        placeholder="Search anime, movies or TV series..."
                        className="h-12 border-0 bg-transparent shadow-none focus-visible:ring-0"
                    />

                    <Button
                        size="lg"
                        className="cursor-pointer px-8"
                        onClick={handleSearch}
                    >
                        <Search className="mr-2 h-5 w-5" />
                        Search
                    </Button>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-lg">
                        🎬 Movies
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-lg">
                        📺 TV Series
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-lg">
                        🌸 Anime
                    </div>
                </div>
            </div>
        </section>
    );
}