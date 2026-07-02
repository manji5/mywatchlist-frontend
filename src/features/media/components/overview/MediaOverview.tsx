interface Props {
    overview: string;
}

export default function MediaOverview({ overview }: Props) {
    return (
        <section className="space-y-5">
            <h2 className="text-3xl font-bold text-white">
                Overview
            </h2>

            <div className="rounded-2xl border border-white/10 bg-[#151F2E] p-8">
                <p className="text-lg leading-8 text-slate-300">
                    {overview || "No overview available."}
                </p>
            </div>
        </section>
    );
}