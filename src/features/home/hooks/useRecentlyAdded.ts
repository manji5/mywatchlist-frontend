import { useQuery } from "@tanstack/react-query";

import { getRecentlyAdded } from "../api/homeApi";
import { mapHomeMedia } from "../mapper/homeMapper";

export function useRecentlyAdded() {

    return useQuery({

        queryKey: [
            "recently-added",
        ],

        queryFn: async () => {

            const data =
                await getRecentlyAdded();

            return mapHomeMedia(data);

        },

        staleTime:
            1000 * 60 * 5,

    });

}