import {
    Camera,
    Mail,
    Pencil,
    User,
} from "lucide-react";

import SettingsCard from "./SettingsCard";

import type { Settings } from "../types";

interface Props {
    user: Settings;

    onAvatarClick: () => void;
    onUsernameClick: () => void;
    onEmailClick: () => void;
}

export default function ProfileSection({
    user,
    onAvatarClick,
    onUsernameClick,
    onEmailClick,
}: Props) {
    return (
        <SettingsCard
            title="Profile"
            description="Manage your public profile."
        >
            <div className="space-y-8">

                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                    <div className="flex items-center gap-6">

                        {user.avatar ? (
                            <img
                                src={user.avatar}
                                alt={user.username}
                                className="h-28 w-28 rounded-full border-4 border-sky-500 object-cover shadow-lg"
                            />
                        ) : (
                            <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-sky-500 bg-sky-500 text-4xl font-bold text-white">
                                {user.username.charAt(0).toUpperCase()}
                            </div>
                        )}

                        <div>

                            <h2 className="text-3xl font-bold">
                                {user.username}
                            </h2>

                            <p className="mt-2 text-slate-400">
                                {user.email}
                            </p>

                        </div>

                    </div>

                    <button
                        onClick={onAvatarClick}
                        className="flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-medium transition hover:bg-sky-600"
                    >
                        <Camera size={18} />
                        Change Avatar
                    </button>

                </div>

                <div className="border-t border-white/10" />

                <SettingRow
                    icon={<User size={20} />}
                    title="Username"
                    value={user.username}
                    onClick={onUsernameClick}
                />

                <SettingRow
                    icon={<Mail size={20} />}
                    title="Email"
                    value={user.email}
                    onClick={onEmailClick}
                />

            </div>
        </SettingsCard>
    );
}

interface SettingRowProps {
    icon: React.ReactNode;
    title: string;
    value: string;
    onClick: () => void;
}

function SettingRow({
    icon,
    title,
    value,
    onClick,
}: SettingRowProps) {
    return (
        <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#101826] p-5 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                    {icon}
                </div>

                <div>

                    <p className="text-sm text-slate-400">
                        {title}
                    </p>

                    <p className="mt-1 text-lg font-semibold">
                        {value}
                    </p>

                </div>

            </div>

            <button
                onClick={onClick}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 transition hover:border-sky-500 hover:bg-sky-500/10"
            >
                <Pencil size={16} />
                Edit
            </button>

        </div>
    );
}