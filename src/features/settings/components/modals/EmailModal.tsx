import { useEffect, useState } from "react";

import Modal from "@/ui/Modal";

interface Props {
    open: boolean;
    currentEmail: string;
    onClose: () => void;
}

export default function EmailModal({
    open,
    currentEmail,
    onClose,
}: Props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (open) {
            setEmail(currentEmail);
            setPassword("");
        }
    }, [open, currentEmail]);

    return (
        <Modal
            open={open}
            onClose={onClose}
            title="Change Email"
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
                        Save
                    </button>
                </>
            }
        >

            <div className="space-y-6">

                <div>

                    <label className="mb-2 block text-sm text-slate-400">
                        New Email
                    </label>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 w-full rounded-xl border border-white/10 bg-[#101826] px-4 outline-none focus:border-sky-500"
                    />

                </div>

                <div>

                    <label className="mb-2 block text-sm text-slate-400">
                        Current Password
                    </label>

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-12 w-full rounded-xl border border-white/10 bg-[#101826] px-4 outline-none focus:border-sky-500"
                    />

                </div>

            </div>

        </Modal>
    );
}