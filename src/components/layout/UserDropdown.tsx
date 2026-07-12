import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    ChevronDown,
    List,
    LogOut,
    Settings,
    User,
} from "lucide-react";

import { useAuth } from "src/hooks/useAuth";

export default function UserDropdown() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const username = user?.username ?? "";
    const avatarLetter = username.charAt(0).toUpperCase() || "?";

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function handleLogout() {
        logout();
        navigate("/");
    }

    return (
        <div
            className="relative"
            ref={dropdownRef}
        >
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center gap-2 rounded-xl px-3 py-2 transition hover:bg-white/10"
            >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 font-semibold text-white">
                    {avatarLetter}
                </div>

                <span className="hidden md:block">
                    {username || "User"}
                </span>

                <ChevronDown
                    size={16}
                    className={`transition-transform ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {open && (
                <div className="absolute right-0 mt-3 w-60 overflow-hidden rounded-2xl border border-white/10 bg-[#101827] shadow-2xl">

                    <div className="border-b border-white/10 px-4 py-4">

                        <p className="font-semibold">
                            {username}
                        </p>

                        <p className="mt-1 text-sm text-slate-400">
                            Account
                        </p>

                    </div>

                    <Link
                        to={username ? `/profile/${username}` : "/"}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 transition hover:bg-white/10"
                    >
                        <User size={18} />
                        Profile
                    </Link>

                    <Link
                        to="/watchlist"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 transition hover:bg-white/10"
                    >
                        <List size={18} />
                        My List
                    </Link>

                    <Link
                        to="/settings"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 transition hover:bg-white/10"
                    >
                        <Settings size={18} />
                        Settings
                    </Link>

                    <div className="my-2 border-t border-white/10" />

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 px-4 py-3 text-left text-red-400 transition hover:bg-red-500/10"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>

                </div>
            )}
        </div>
    );
}