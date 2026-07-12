import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";

import Home from "@/pages/home/Home";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Search from "@/pages/media/Search";
import Watchlist from "@/pages/user/Watchlist";
import MediaDetail from "@/pages/media/MediaDetail";

import Profile from "@/features/profile/pages/Profile";
import Settings from "@/features/settings/pages/Settings";

import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/search",
                element: <Search />,
            },
            {
                path: "/watchlist",
                element: <Watchlist />,
            },
            {
                path: "/profile/:username",
                element: <Profile />,
            },
            {
                path: "/settings",
                element: <Settings />,
            },
            {
                path: "/media/:type/:id",
                element: <MediaDetail />,
            },
        ],
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export function AppRouter() {
    return <RouterProvider router={router} />;
}