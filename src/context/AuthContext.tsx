import {
    createContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import type { LoginResponse } from "@/features/auth/types";
import { STORAGE_KEYS } from "@/lib/constants";

interface AuthUser {
    username: string;
    email: string;
}

interface AuthContextType {
    token: string | null;
    user: AuthUser | null;
    isAuthenticated: boolean;
    login: (response: LoginResponse) => void;
    logout: () => void;
}

export const AuthContext =
    createContext<AuthContextType | null>(
        null
    );

interface Props {
    children: React.ReactNode;
}

export function AuthProvider({
    children,
}: Props) {
    const [token, setToken] = useState<string | null>(null);

    const [user, setUser] =
        useState<AuthUser | null>(null);

    useEffect(() => {
        const savedToken =
            localStorage.getItem(
                STORAGE_KEYS.TOKEN
            );

        const savedUser =
            localStorage.getItem(
                STORAGE_KEYS.USER
            );

        if (savedToken) {
            setToken(savedToken);
        }

        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    function login(response: LoginResponse) {
        const authUser: AuthUser = {
            username: response.username,
            email: response.email,
        };

        localStorage.setItem(
            STORAGE_KEYS.TOKEN,
            response.token
        );

        localStorage.setItem(
            STORAGE_KEYS.USER,
            JSON.stringify(authUser)
        );

        setToken(response.token);
        setUser(authUser);
    }

    function logout() {
        localStorage.removeItem(
            STORAGE_KEYS.TOKEN
        );

        localStorage.removeItem(
            STORAGE_KEYS.USER
        );

        setToken(null);
        setUser(null);
    }

    const value = useMemo(
        () => ({
            token,
            user,
            isAuthenticated: !!token,
            login,
            logout,
        }),
        [token, user]
    );

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}