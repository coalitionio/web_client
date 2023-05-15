import { RouteObject, createBrowserRouter } from "react-router-dom";
import LandingLayout from "../components/layout/LandingLayout";
import React from "react";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        path: "/contact",
        element: <h1>Click below to contact</h1>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
