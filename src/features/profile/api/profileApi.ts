import { api } from "@/lib/api";

export async function getProfile(
    username: string
) {
    const { data } = await api.get(
        `/users/${username}`
    );

    return data;
}