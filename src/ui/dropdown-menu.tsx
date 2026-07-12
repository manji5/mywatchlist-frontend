import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    ChevronDown,
    LogOut,
    Settings,
    User,
    List,
} from "lucide-react";

import { useAuth } from "src/hooks/useAuth";

export default function UserDropdown() {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

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
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 rounded-xl px-3 py-2 transition hover:bg-white/10"
            >

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 font-semibold text-white">

                    {user?.username.charAt(0).toUpperCase()}

                </div>

                <span className="hidden md:block">

                    {user?.username}

                </span>

                <ChevronDown
                    size={16}
                    className={`transition ${open ? "rotate-180" : ""}`}
                />

            </button>

            {open && (

                <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#101827] shadow-2xl">

                    <Link
                        to={`/profile/${user?.username}`}
                        className="flex items-center gap-3 px-4 py-3 transition hover:bg-white/10"
                        onClick={() => setOpen(false)}
                    >
                        <User size={18} />

                        Profile
                    </Link>

                    <Link
                        to="/watchlist"
                        className="flex items-center gap-3 px-4 py-3 transition hover:bg-white/10"
                        onClick={() => setOpen(false)}
                    >
                        <List size={18} />

                        My List
                    </Link>

                    <button
                        className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-white/10"
                    >
                        <Settings size={18} />

                        Settings
                    </button>

                    <hr className="border-white/10" />

                    <button
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