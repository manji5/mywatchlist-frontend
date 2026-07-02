export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-12">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row">

                <p>
                    © 2026 MyWatchlist
                </p>

                <div className="flex gap-6">
                    <span>Movies</span>
                    <span>TV Series</span>
                    <span>Anime</span>
                </div>

            </div>
        </footer>
    );
}