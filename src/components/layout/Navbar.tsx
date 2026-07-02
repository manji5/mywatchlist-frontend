import { Link } from "react-router-dom";
import { Moon } from "lucide-react";

import { useAuth } from "src/hooks/useAuth";
import SearchBar from "src/features/search/components/SearchBar";

import UserDropdown from "./UserDropdown";

export default function Navbar() {
    const { isAuthenticated } = useAuth();

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B101B]/80 backdrop-blur-xl">

            <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6">

                <Link
                    to="/"
                    className="shrink-0 text-2xl font-bold tracking-tight text-sky-400"
                >
                    MyWatchlist
                </Link>

                {isAuthenticated && (
                    <div className="hidden flex-1 lg:block">
                        <SearchBar />
                    </div>
                )}

                <div className="ml-auto flex items-center gap-3">

                    <button className="rounded-lg p-2 transition hover:bg-white/10">
                        <Moon size={18} />
                    </button>

                    {!isAuthenticated ? (
                        <>
                            <Link
                                to="/login"
                                className="rounded-lg px-4 py-2 text-sm text-slate-300 transition hover:text-white"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-400"
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/watchlist"
                                className="rounded-xl px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
                            >
                                My List
                            </Link>

                            <UserDropdown />
                        </>
                    )}

                </div>

            </div>

        </header>
    );
}