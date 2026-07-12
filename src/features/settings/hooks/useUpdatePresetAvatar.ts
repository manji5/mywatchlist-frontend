import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updatePresetAvatar } from "../api/settingsApi";

export function useUpdatePresetAvatar() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: updatePresetAvatar,

        onSuccess: () => {

            queryClient.invalidateQueries({
                queryKey: ["settings"],
            });

            queryClient.invalidateQueries({
                queryKey: ["profile"],
            });

            queryClient.invalidateQueries({
                queryKey: ["auth"],
            });

        },

    });

}