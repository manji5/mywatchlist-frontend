import { useQuery } from "@tanstack/react-query";

import { getContinueWatching } from "../api/homeApi";
import { mapHomeMedia } from "../mapper/homeMapper";

export function useContinueWatching() {

    return useQuery({

        queryKey: [
            "continue-watching",
        ],

        queryFn: async () => {

            const data =
                await getContinueWatching();

            return mapHomeMedia(data);

        },

        staleTime:
            1000 * 60 * 5,

    });

}