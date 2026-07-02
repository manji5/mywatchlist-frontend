import { api } from "@/lib/api";

export async function getContinueWatching() {
    const { data } = await api.get(
        "/media/continue"
    );

    return data;
}

export async function getRecentlyAdded() {
    const { data } = await api.get(
        "/media/recent"
    );

    return data;
}