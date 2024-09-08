import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "../pages/Error";
import AppLayout from "../layout/AppLayout";
//import { HomePage as Home } from "../pages/HomePage";
const Home = lazy(() => import("../pages/HomePage"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
    errorElement: <Error />,
  },
]);

const AppRouter = () => <RouterProvider router={appRouter} />;

export default AppRouter;
