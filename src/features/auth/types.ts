export interface LoginRequest {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface LoginResponse {
    token: string;
    username: string;
    email: string;
    message: string;
}

export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
}