import { lazy, Suspense } from "react";
import iRoute from "./types/types.ts";
import Preloader from "../../shared/ui/preloader";

const EmploysPage = lazy(() => import("../../pages/employs/index.ts"));
const HomePage = lazy(() => import("../../pages/home/index.ts"));

export const PublicRoutes: iRoute[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Preloader />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Preloader />}>
        <EmploysPage />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <p>Ошибка 404</p>
      </div>
    ),
  },
];
