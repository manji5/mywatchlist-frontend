export interface Settings {
    username: string;

    email: string;

    avatar: string | null;
}

export interface UpdateUsernameRequest {
    username: string;
}

export interface UpdateEmailRequest {
    email: string;
}

export interface UpdatePasswordRequest {
    currentPassword: string;

    newPassword: string;
}

export interface UpdatePresetAvatarRequest {
    preset: string;
}