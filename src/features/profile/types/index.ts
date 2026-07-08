export interface Profile {
    username: string;

    avatar: string | null;

    joinedAt: string | null;

    stats: ProfileStats;
}

export interface ProfileStats {
    total: number;

    movies: number;

    series: number;

    anime: number;

    completed: number;

    watching: number;

    planned: number;

    onHold: number;

    dropped: number;
}