import { useHome } from "src/features/media/hooks";

export default function TrendingSection() {
    const { data, isLoading, error } = useHome();

    if (isLoading) {
        return (
            <section className="mx-auto max-w-7xl px-6 py-12">
                Loading...
            </section>
        );
    }

    if (error) {
        return (
            <section className="mx-auto max-w-7xl px-6 py-12">
                Failed to load data.
            </section>
        );
    }

    return (
        <section className="mx-auto max-w-7xl px-6 py-12">
            <h2 className="mb-8 text-3xl font-bold">
                🔥 Trending
            </h2>

            <pre className="overflow-auto rounded-xl bg-zinc-900 p-6 text-sm">
                {JSON.stringify(data, null, 2)}
            </pre>
        </section>
    );
}