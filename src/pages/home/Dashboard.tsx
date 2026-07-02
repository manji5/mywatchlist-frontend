import ContinueWatchingRow from "@/features/home/components/continueWatching/ContinueWatchingRow";
import HomeSection from "@/features/home/components/sections/HomeSection";
import RecommendationsComingSoon from "@/features/home/components/recommendations/RecommendationsComingSoon";

export default function Dashboard() {
    return (
        <main className="pb-16">

            <ContinueWatchingRow />

            <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-14 px-6">

                <HomeSection
                    title="Trending Movies"
                    type="movie"
                />

                <HomeSection
                    title="Trending Series"
                    type="series"
                />

                <HomeSection
                    title="Trending Anime"
                    type="anime"
                />

                <HomeSection
                    title="Recently Added"
                    type="watchlist"
                />

                <RecommendationsComingSoon />

            </div>

        </main>
    );
}