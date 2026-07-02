import SearchBar from "src/components/search/SearchBar";
import SearchResults from "src/components/search/SearchResults";

export default function Search() {
    return (
        <main className="mx-auto min-h-screen max-w-7xl px-6 py-10">

            <h1 className="text-5xl font-bold">
                Search
            </h1>

            <p className="mt-2 mb-10 text-slate-400">
                Search movies, TV series and anime.
            </p>

            <SearchBar />

            <SearchResults />

        </main>
    );
}