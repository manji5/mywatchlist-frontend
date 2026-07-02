import { api } from "src/lib/api";

import type {
    LoginRequest,
    LoginResponse,
    RegisterRequest,
} from "./types";

export async function login(request: LoginRequest) {
    const { data } = await api.post<LoginResponse>(
        "/auth/login",
        request
    );

    return data;
}

export async function register(request: RegisterRequest) {
    const { data } = await api.post<string>(
        "/auth/register",
        request
    );

    return data;
}