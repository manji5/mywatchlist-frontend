import {
    CheckCircle2,
    Clapperboard,
    Clock3,
    Eye,
    Film,
    ListVideo,
    Pause,
    Tv,
    XCircle,
} from "lucide-react";

import ProfileAvatar from "./ProfileAvatar";

import type { Profile } from "../../types";

interface Props {
    profile: Profile;
    totalWatchTimeMinutes: number;
}

export default function ProfileHero({
    profile,
    totalWatchTimeMinutes,
}: Props) {

    return (
        <section className="mb-16">

            <div className="rounded-3xl border border-white/10 bg-[#151F2E] p-8">

                <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">

                    <div className="flex items-center gap-8">

                        <ProfileAvatar
                            username={profile.username}
                            avatar={profile.avatar}
                        />

                        <div>

                            <h1 className="text-5xl font-bold">
                                {profile.username}
                            </h1>

                            <p className="mt-2 text-xl text-slate-400">
                                @{profile.username}
                            </p>

                            <p className="mt-6 text-slate-500">
                                {profile.stats.total} Titles in Library
                            </p>

                        </div>

                    </div>

                    <div className="rounded-2xl bg-sky-500/10 px-8 py-6 text-center">

                        <Clock3 className="mx-auto mb-3 h-8 w-8 text-sky-400" />

                        <p className="text-sm text-slate-400">
                            Watch Time
                        </p>

                        <h2 className="mt-2 text-5xl font-bold">
                            {formatWatchTime(totalWatchTimeMinutes)}
                        </h2>

                    </div>

                </div>

                <div className="my-10 h-px bg-white/10" />

                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

                    <Stat
                        icon={<Film size={18} />}
                        label="Movies"
                        value={profile.stats.movies}
                    />

                    <Stat
                        icon={<Tv size={18} />}
                        label="Series"
                        value={profile.stats.series}
                    />

                    <Stat
                        icon={<Clapperboard size={18} />}
                        label="Anime"
                        value={profile.stats.anime}
                    />

                    <Stat
                        icon={<ListVideo size={18} />}
                        label="Total"
                        value={profile.stats.total}
                    />

                    <Stat
                        icon={<Eye size={18} />}
                        label="Watching"
                        value={profile.stats.watching}
                    />

                    <Stat
                        icon={<CheckCircle2 size={18} />}
                        label="Completed"
                        value={profile.stats.completed}
                    />

                    <Stat
                        icon={<Pause size={18} />}
                        label="Planned"
                        value={profile.stats.planned}
                    />

                    <Stat
                        icon={<XCircle size={18} />}
                        label="Dropped"
                        value={profile.stats.dropped}
                    />

                </div>

            </div>

        </section>
    );
}

interface StatProps {
    icon: React.ReactNode;
    label: string;
    value: number;
}

function Stat({
    icon,
    label,
    value,
}: StatProps) {

    return (
        <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400">
                {icon}
            </div>

            <div>

                <p className="text-sm text-slate-400">
                    {label}
                </p>

                <h3 className="text-3xl font-bold">
                    {value}
                </h3>

            </div>

        </div>
    );
}

function formatWatchTime(minutes: number) {

    if (minutes < 60) {
        return `${minutes}m`;
    }

    const hours = Math.floor(minutes / 60);

    if (hours < 24) {
        return `${hours}h`;
    }

    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;

    return remainingHours
        ? `${days}d ${remainingHours}h`
        : `${days}d`;
}