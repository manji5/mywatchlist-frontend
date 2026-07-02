import { api } from "src/lib/api";

import { mapSearchResponse } from "../mapper/searchMapper";
import type { SearchType } from "../types";

export async function searchMedia(
    type: SearchType,
    query: string
) {

    const response = await api.get(`/media/${type}`, {
        params: {
            query,
        },
    });

    console.log(response.data);


    return mapSearchResponse(type, response.data);

}