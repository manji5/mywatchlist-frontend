import { api } from "@/lib/api";

export async function getWatchlist(
    page = 0,
    size = 20
) {
    const { data } = await api.get("/media/watchlist", {
        params: {
            page,
            size,
        },
    });

    return data;
}