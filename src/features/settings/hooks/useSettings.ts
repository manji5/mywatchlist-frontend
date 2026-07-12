import { useQuery } from "@tanstack/react-query";

import { getSettings } from "../api/settingsApi";
import { mapSettings } from "../mapper/settingsMapper";

export function useSettings() {
    return useQuery({
        queryKey: ["settings"],

        queryFn: async () => {
            const response =
                await getSettings();

            return mapSettings(
                response
            );
        },
    });
}