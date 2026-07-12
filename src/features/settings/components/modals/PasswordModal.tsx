import { useEffect, useState } from "react";

import Modal from "@/ui/Modal";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function PasswordModal({
    open,
    onClose,
}: Props) {

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        if (open) {
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
        }
    }, [open]);

    return (
        <Modal
            open={open}
            onClose={onClose}
            title="Change Password"
            footer={
                <>
                    <button
                        onClick={onClose}
                        className="rounded-xl border border-white/10 px-6 py-3 hover:bg-white/5"
                    >
                        Cancel
                    </button>

                    <button
                        className="rounded-xl bg-sky-500 px-6 py-3 font-medium hover:bg-sky-600"
                    >
                        Change Password
                    </button>
                </>
            }
        >

            <div className="space-y-6">

                <div>

                    <label className="mb-2 block text-sm text-slate-400">
                        Current Password
                    </label>

                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="h-12 w-full rounded-xl border border-white/10 bg-[#101826] px-4 outline-none focus:border-sky-500"
                    />

                </div>

                <div>

                    <label className="mb-2 block text-sm text-slate-400">
                        New Password
                    </label>

                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="h-12 w-full rounded-xl border border-white/10 bg-[#101826] px-4 outline-none focus:border-sky-500"
                    />

                </div>

                <div>

                    <label className="mb-2 block text-sm text-slate-400">
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="h-12 w-full rounded-xl border border-white/10 bg-[#101826] px-4 outline-none focus:border-sky-500"
                    />

                </div>

            </div>

        </Modal>
    );
}