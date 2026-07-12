import {
    type ReactNode,
    useEffect,
} from "react";

import { X } from "lucide-react";

interface Props {
    open: boolean;

    title: string;

    children: ReactNode;

    onClose: () => void;

    footer?: ReactNode;

    width?: "sm" | "md" | "lg";
}

export default function Modal({
    open,
    title,
    children,
    onClose,
    footer,
    width = "md",
}: Props) {

    useEffect(() => {

        if (!open) {
            return;
        }

        function handleEscape(
            event: KeyboardEvent,
        ) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        document.addEventListener(
            "keydown",
            handleEscape,
        );

        document.body.style.overflow = "hidden";

        return () => {

            document.removeEventListener(
                "keydown",
                handleEscape,
            );

            document.body.style.overflow = "";

        };

    }, [open, onClose]);

    if (!open) {
        return null;
    }

    const widthClass = {
        sm: "max-w-md",
        md: "max-w-xl",
        lg: "max-w-3xl",
    }[width];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                onClick={onClose}
            />

            <div
                className={`relative mx-6 flex max-h-[90vh] w-full ${widthClass} flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#151F2E] shadow-2xl`}
            >

                <div className="flex items-center justify-between border-b border-white/10 px-8 py-6">

                    <h2 className="text-2xl font-bold">
                        {title}
                    </h2>

                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 transition hover:bg-white/10"
                    >
                        <X size={22} />
                    </button>

                </div>

                <div className="flex-1 overflow-y-auto px-8 py-8">
                    {children}
                </div>

                {footer && (

                    <div className="flex shrink-0 justify-end gap-4 border-t border-white/10 bg-[#151F2E] px-8 py-6">

                        {footer}

                    </div>

                )}

            </div>

        </div>
    );
}