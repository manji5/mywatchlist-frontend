import { Lock, Pencil } from "lucide-react";

import SettingsCard from "./SettingsCard";

interface Props {
    onPasswordClick: () => void;
}

export default function SecuritySection({
    onPasswordClick,
}: Props) {
    return (
        <SettingsCard
            title="Security"
            description="Keep your account secure."
        >

            <div className="rounded-2xl border border-white/10 bg-[#101826] p-5">

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                            <Lock size={20} />
                        </div>

                        <div>

                            <p className="text-sm text-slate-400">
                                Password
                            </p>

                            <p className="mt-1 text-lg font-medium">
                                ••••••••••••••••
                            </p>

                        </div>

                    </div>

                    <button
                        onClick={onPasswordClick}
                        className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 transition hover:border-sky-500 hover:bg-sky-500/10"
                    >
                        <Pencil size={16} />
                        Change
                    </button>

                </div>

            </div>

        </SettingsCard>
    );
}