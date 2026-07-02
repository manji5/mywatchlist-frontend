import { Sparkles } from "lucide-react";

export default function RecommendationsComingSoon() {
    return (
        <section className="rounded-3xl border border-dashed border-slate-700 bg-[#111827] p-10">

            <div className="flex items-center gap-3">

                <Sparkles className="h-7 w-7 text-sky-400" />

                <h2 className="text-3xl font-bold">
                    Recommendations
                </h2>

            </div>

            <p className="mt-4 max-w-2xl text-slate-400">
                Personalized recommendations based on your watch history
                are coming soon.
            </p>

            <div className="mt-8 inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-400">
                🚧 Coming Soon
            </div>

        </section>
    );
}