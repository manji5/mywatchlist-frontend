import { useParams } from "react-router-dom";

import ProfileHero from "../components/hero/ProfileHero";

import { useProfile } from "../hooks/useProfile";
import { useWatchlist } from "@/features/watchlist/hooks/useWatchlist";

import ProfileLibrary from "../components/library/ProfileLibrary";

export default function Profile() {
    const { username } = useParams();

    const {
        data: profile,
        isLoading: profileLoading,
        isError: profileError,
    } = useProfile(username!);

    const {
        data: watchlist = [],
        isLoading: watchlistLoading,
    } = useWatchlist();

    const totalWatchTimeMinutes = watchlist.reduce(
        (sum, item) => sum + item.totalWatchedMinutes,
        0
    );

    if (profileLoading || watchlistLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-sky-500 border-t-transparent" />
            </div>
        );
    }

    if (profileError || !profile) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center gap-4">

                <h1 className="text-3xl font-bold">
                    Failed to load profile
                </h1>

                <p className="text-slate-400">
                    The requested profile could not be loaded.
                </p>

            </div>
        );
    }

    return (
        <main className="mx-auto w-full max-w-7xl px-6 py-10">

            <ProfileHero
                profile={profile}
                totalWatchTimeMinutes={totalWatchTimeMinutes}
            />

            <ProfileLibrary />

        </main>
    );
}