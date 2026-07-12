import type { ReactNode } from "react";

interface Props {
    title: string;
    description?: string;
    children: ReactNode;
}

export default function SettingsCard({
    title,
    description,
    children,
}: Props) {
    return (
        <section className="rounded-3xl border border-white/10 bg-[#151F2E] p-8">

            <div className="mb-8">

                <h2 className="text-2xl font-bold">
                    {title}
                </h2>

                {description && (
                    <p className="mt-2 text-slate-400">
                        {description}
                    </p>
                )}

            </div>

            {children}

        </section>
    );
}