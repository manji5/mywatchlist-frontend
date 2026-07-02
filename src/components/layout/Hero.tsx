import { Search } from "lucide-react";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-500/15 via-transparent to-transparent" />

            <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
                <span className="mb-6 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-400">
                    Track Movies • TV Shows • Anime
                </span>

                <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
                    Your entire watchlist
                    <span className="block text-sky-400">
                        in one beautiful place.
                    </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
                    Search movies, TV series and anime instantly. Organize your
                    watchlist, track your progress and discover your next favorite title.
                </p>

                <div className="mt-12 flex w-full max-w-2xl gap-3">
                    <Input
                        placeholder="Search anime, movies or TV series..."
                        className="h-14 text-base"
                    />

                    <Button size="lg">
                        <Search className="size-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
}