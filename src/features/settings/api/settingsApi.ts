import { api } from "@/lib/api";

export interface UpdatePresetAvatarRequest {
    avatarId: number;
}

export interface UpdateUsernameRequest {
    username: string;
    password: string;
}

export interface UpdateEmailRequest {
    email: string;
    password: string;
}

export interface UpdatePasswordRequest {
    currentPassword: string;
    newPassword: string;
}

export async function getSettings() {
    const { data } = await api.get("/users/me");

    return data;
}

export async function updatePresetAvatar(
    request: UpdatePresetAvatarRequest,
) {
    const { data } = await api.patch(
        "/users/profile-image/preset",
        request,
    );

    return data;
}

export async function uploadAvatar(file: File) {

    const formData = new FormData();

    formData.append("file", file);

    const { data } = await api.post(
        "/users/profile-image",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        },
    );

    return data;
}

export async function deleteAvatar() {

    const { data } = await api.delete(
        "/users/profile-image",
    );

    return data;
}

export async function updateUsername(
    request: UpdateUsernameRequest,
) {

    const { data } = await api.patch(
        "/users/username",
        request,
    );

    return data;
}

export async function updateEmail(
    request: UpdateEmailRequest,
) {

    const { data } = await api.patch(
        "/users/email",
        request,
    );

    return data;
}

export async function updatePassword(
    request: UpdatePasswordRequest,
) {

    const { data } = await api.patch(
        "/users/password",
        request,
    );

    return data;
}