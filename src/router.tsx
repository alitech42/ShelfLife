import { createBrowserRouter, Navigate } from "react-router";
import { App } from "./App";
import { Home } from "./routes/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/home",
                element: <Navigate to={"/"} replace />,
            },
        ],
    },
]);
