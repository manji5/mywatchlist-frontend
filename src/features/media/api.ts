import { api } from "src/lib/api";

export async function searchMedia(query: string) {
    const { data } = await api.get("/media/search", {
        params: {
            query,
        },
    });

    return data;
}

export async function getTrendingMovies() {
    const { data } = await api.get("/media/trending/movies");

    return data;
}

export async function getTrendingSeries() {
    const { data } = await api.get("/media/trending/series");

    return data;
}

export async function getTrendingAnime() {
    const { data } = await api.get("/media/trending/anime");

    return data;
}