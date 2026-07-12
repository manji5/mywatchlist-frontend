export interface PresetAvatar {
    id: number;
    image: string;
}

const API_URL = import.meta.env.VITE_API_URL.replace(/\/api\/?$/, "");

export const PRESET_AVATARS: PresetAvatar[] = Array.from(
    { length: 20 },
    (_, index) => ({
        id: index + 1,
        image: `${API_URL}/avatars/avatar-${index + 1}.jpg`,
    }),
);