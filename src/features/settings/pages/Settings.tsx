import { useState } from "react";

import ProfileSection from "../components/ProfileSection";
import SecuritySection from "../components/SecuritySection";
import AppearanceSection from "../components/AppearanceSection";
import DangerZone from "../components/DangerZone";

import AvatarModal from "../components/modals/AvatarModal";
import UsernameModal from "../components/modals/UsernameModal";
import EmailModal from "../components/modals/EmailModal";
import PasswordModal from "../components/modals/PasswordModal";

import { useSettings } from "../hooks/useSettings";

export default function Settings() {

    const {
        data,
        isLoading,
        isError,
    } = useSettings();

    const [avatarOpen, setAvatarOpen] = useState(false);
    const [usernameOpen, setUsernameOpen] = useState(false);
    const [emailOpen, setEmailOpen] = useState(false);
    const [passwordOpen, setPasswordOpen] = useState(false);

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-sky-500 border-t-transparent" />
            </div>
        );
    }

    if (isError || !data) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                Failed to load settings.
            </div>
        );
    }

    return (
        <>
            <main className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10">

                <div>

                    <h1 className="text-4xl font-bold">
                        Settings
                    </h1>

                    <p className="mt-2 text-slate-400">
                        Manage your account settings.
                    </p>

                </div>

                <ProfileSection
                    user={data}
                    onAvatarClick={() => setAvatarOpen(true)}
                    onUsernameClick={() => setUsernameOpen(true)}
                    onEmailClick={() => setEmailOpen(true)}
                />

                <SecuritySection
                    onPasswordClick={() => setPasswordOpen(true)}
                />

                <AppearanceSection />

                <DangerZone />

            </main>

            <AvatarModal
                open={avatarOpen}
                onClose={() => setAvatarOpen(false)}
                currentAvatar={data.avatar}
                onPresetSave={(preset) => {
                    console.log(preset);
                }}
                onUpload={(file) => {
                    console.log(file);
                }}
            />

            <UsernameModal
                open={usernameOpen}
                onClose={() => setUsernameOpen(false)}
                currentUsername={data.username}
            />

            <EmailModal
                open={emailOpen}
                onClose={() => setEmailOpen(false)}
                currentEmail={data.email}
            />

            <PasswordModal
                open={passwordOpen}
                onClose={() => setPasswordOpen(false)}
            />
        </>
    );
}