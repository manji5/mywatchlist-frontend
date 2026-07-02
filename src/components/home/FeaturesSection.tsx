import { Film, Tv, Sparkles } from "lucide-react";

const features = [
    {
        icon: Film,
        title: "Track Movies",
        description:
            "Save your favorite movies, organize your watchlist and never lose track again.",
    },
    {
        icon: Tv,
        title: "TV Series Progress",
        description:
            "Keep track of episodes and seasons with an easy-to-use progress system.",
    },
    {
        icon: Sparkles,
        title: "Anime Collection",
        description:
            "Manage your anime library with the same experience in one unified platform.",
    },
];

export default function FeaturesSection() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-24">
            <div className="mb-14 text-center">
                <h2 className="text-4xl font-bold">Everything in One Place</h2>

                <p className="mt-4 text-slate-400">
                    No more switching between different platforms.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-sky-500/40"
                    >
                        <feature.icon className="mb-6 h-10 w-10 text-sky-400" />

                        <h3 className="mb-3 text-xl font-semibold">
                            {feature.title}
                        </h3>

                        <p className="leading-7 text-slate-400">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}