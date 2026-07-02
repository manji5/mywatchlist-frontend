import axios from "axios";

import { STORAGE_KEYS } from "./constants";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem(STORAGE_KEYS.TOKEN);

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});