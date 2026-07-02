import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
    return (
        <section className="relative overflow-hidden py-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle,#38bdf81a,transparent_70%)]" />

            <div className="relative mx-auto max-w-5xl px-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-14 text-center backdrop-blur-2xl">

                    <h2 className="text-5xl font-bold leading-tight">
                        Start building your
                        <span className="block text-sky-400">
                            ultimate watchlist.
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                        Save movies, TV series and anime in one place.
                        Track your progress and never forget what to watch next.
                    </p>

                    <Link
                        to="/register"
                        className="mt-12 inline-flex items-center gap-3 rounded-xl bg-sky-500 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:bg-sky-400"
                    >
                        Get Started
                        <ArrowRight className="h-5 w-5" />
                    </Link>

                </div>
            </div>
        </section>
    );
}