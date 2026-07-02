import { api } from "src/lib/api";

import { mapMedia } from "../mapper/mediaMapper";

import type { MediaType } from "../types/types";

export async function getMedia(
    type: MediaType,
    id: number
) {

    const response = await api.get(
        `/media/${type}/${id}`
    );

    return mapMedia(type, response.data);

}