import { Monitor, Moon, Sun } from "lucide-react";

import SettingsCard from "./SettingsCard";

export default function AppearanceSection() {
    return (
        <SettingsCard
            title="Appearance"
            description="Customize the application's appearance."
        >

            <div className="grid gap-4 md:grid-cols-3">

                <button className="rounded-2xl border border-sky-500 bg-sky-500/10 p-6 transition hover:bg-sky-500/20">

                    <Moon
                        size={28}
                        className="mx-auto mb-4"
                    />

                    <h3 className="font-semibold">
                        Dark
                    </h3>

                </button>

                <button className="rounded-2xl border border-white/10 p-6 transition hover:border-sky-500">

                    <Sun
                        size={28}
                        className="mx-auto mb-4"
                    />

                    <h3 className="font-semibold">
                        Light
                    </h3>

                </button>

                <button className="rounded-2xl border border-white/10 p-6 transition hover:border-sky-500">

                    <Monitor
                        size={28}
                        className="mx-auto mb-4"
                    />

                    <h3 className="font-semibold">
                        System
                    </h3>

                </button>

            </div>

        </SettingsCard>
    );
}