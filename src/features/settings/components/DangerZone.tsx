import { Trash2 } from "lucide-react";

import SettingsCard from "./SettingsCard";

export default function DangerZone() {
    return (
        <SettingsCard
            title="Danger Zone"
            description="These actions are permanent and cannot be undone."
        >

            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                    <div>

                        <h3 className="text-lg font-semibold text-red-400">
                            Delete Account
                        </h3>

                        <p className="mt-2 text-slate-400">
                            Permanently remove your account and all associated data.
                        </p>

                    </div>

                    <button
                        className="flex items-center justify-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-medium text-white transition hover:bg-red-600"
                    >
                        <Trash2 size={18} />
                        Delete
                    </button>

                </div>

            </div>

        </SettingsCard>
    );
}