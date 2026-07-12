import { useEffect, useRef, useState } from "react";
import {
    Check,
    ImagePlus,
    Upload,
} from "lucide-react";

import Modal from "@/ui/Modal";

import { PRESET_AVATARS } from "../../constants/presetAvatars";

interface Props {
    open: boolean;
    currentAvatar?: string | null;

    onClose: () => void;

    onPresetSave: (avatarId: number) => Promise<void> | void;
    onUpload: (file: File) => Promise<void> | void;
}

export default function AvatarModal({
    open,
    currentAvatar,
    onClose,
    onPresetSave,
    onUpload,
}: Props) {

    const inputRef = useRef<HTMLInputElement>(null);

    const [selectedPreset, setSelectedPreset] =
        useState<number | null>(null);

    const [selectedFile, setSelectedFile] =
        useState<File | null>(null);

    useEffect(() => {

        if (!open) {
            return;
        }

        setSelectedFile(null);

        const preset = PRESET_AVATARS.find((avatar) =>
            currentAvatar?.includes(`avatar-${avatar.id}`)
        );

        setSelectedPreset(preset?.id ?? null);

    }, [open, currentAvatar]);

    async function handleSave() {

        if (selectedPreset == null) {
            return;
        }

        await onPresetSave(selectedPreset);

        onClose();

    }

    async function handleUpload() {

        if (!selectedFile) {
            return;
        }

        await onUpload(selectedFile);

        onClose();

    }

    function handleChooseFile(
        event: React.ChangeEvent<HTMLInputElement>,
    ) {

        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        setSelectedPreset(null);
        setSelectedFile(file);

    }

    return (
        <Modal
            open={open}
            onClose={onClose}
            title="Change Profile Picture"
            width="lg"
            footer={
                <>
                    <button
                        onClick={onClose}
                        className="rounded-xl border border-white/10 px-6 py-3 transition hover:bg-white/5"
                    >
                        Cancel
                    </button>

                    {selectedFile ? (

                        <button
                            onClick={handleUpload}
                            className="rounded-xl bg-sky-500 px-6 py-3 font-medium transition hover:bg-sky-600"
                        >
                            Upload
                        </button>

                    ) : (

                        <button
                            disabled={selectedPreset == null}
                            onClick={handleSave}
                            className="rounded-xl bg-sky-500 px-6 py-3 font-medium transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Save
                        </button>

                    )}

                </>
            }
        >

            <div className="space-y-8">

                <div className="flex justify-center">

                    {currentAvatar ? (

                        <img
                            src={currentAvatar}
                            alt="Current avatar"
                            className="h-28 w-28 rounded-full border-4 border-sky-500 object-cover"
                        />

                    ) : (

                        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-sky-500 text-white">
                            <ImagePlus size={40} />
                        </div>

                    )}

                </div>

                <div>

                    <h3 className="mb-5 text-lg font-semibold">
                        Preset Avatars
                    </h3>

                    <div className="grid grid-cols-5 gap-4">

                        {PRESET_AVATARS.map((avatar) => {

                            const active =
                                avatar.id === selectedPreset;

                            return (

                                <button
                                    key={avatar.id}
                                    type="button"
                                    onClick={() => {
                                        setSelectedPreset(avatar.id);
                                        setSelectedFile(null);
                                    }}
                                    className={`relative overflow-hidden rounded-2xl border-2 transition ${active
                                            ? "scale-105 border-sky-500"
                                            : "border-white/10 hover:border-sky-500"
                                        }`}
                                >

                                    <img
                                        src={avatar.image}
                                        alt={`Avatar ${avatar.id}`}
                                        className="aspect-square w-full object-cover"
                                    />

                                    {active && (

                                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">

                                            <div className="rounded-full bg-sky-500 p-2">

                                                <Check size={18} />

                                            </div>

                                        </div>

                                    )}

                                </button>

                            );

                        })}

                    </div>

                </div>

                <div className="border-t border-white/10 pt-8">

                    <button
                        type="button"
                        onClick={() => inputRef.current?.click()}
                        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-dashed border-sky-500/40 py-10 transition hover:bg-sky-500/5"
                    >

                        <Upload />

                        {selectedFile
                            ? selectedFile.name
                            : "Upload Your Own"}

                    </button>

                    <input
                        ref={inputRef}
                        hidden
                        type="file"
                        accept="image/*"
                        onChange={handleChooseFile}
                    />

                </div>

            </div>

        </Modal>
    );
}