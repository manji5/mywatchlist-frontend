import { useQuery } from "@tanstack/react-query";

import { getProfile } from "../api/profileApi";
import { mapProfile } from "../mapper/profileMapper";

export function useProfile(
    username: string
) {
    return useQuery({
        queryKey: [
            "profile",
            username,
        ],

        queryFn: async () => {
            const data =
                await getProfile(username);

            return mapProfile(data);
        },

        enabled: !!username,

        staleTime:
            1000 * 60 * 5,
    });
}