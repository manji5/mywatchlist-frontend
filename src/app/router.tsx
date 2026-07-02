import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "src/layouts/MainLayout";
import AuthLayout from "src/layouts/AuthLayout";

import Home from "src/pages/home/Home";
import Login from "src/pages/auth/Login";
import Register from "src/pages/auth/Register";
import Search from "src/pages/media/Search";
import Watchlist from "src/pages/user/Watchlist";
import UserProfile from "src/pages/user/UserProfile";
import NotFound from "src/pages/NotFound";
import MediaDetail from "@/pages/media/MediaDetail";

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
                element: <UserProfile />,
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