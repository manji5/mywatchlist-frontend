import { api } from "src/lib/api";

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