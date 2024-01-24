import { RouteObject, createBrowserRouter } from "react-router-dom";
import LandingLayout from "../base/components/layout/LandingLayout";
import appRoutes from "@/base/app/route";
import MainLayout from "@/base/mantis/layout/MainLayout";
import MainPharmacyLayout from "@/base/layout/MainPharmacyLayout";

const routes: RouteObject[] = [
  {
    path: "/old",
    element: <MainLayout />,
    children: [
      // appRoutes,
      {
        path: "contact",
        element: <h1>Click below to contact</h1>,
      },
    ],
  },
  {
    path: "/",
    element: <MainPharmacyLayout />,
    children: [
      {
        path: "/contact",
        element: <h1>Click below to contact</h1>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
