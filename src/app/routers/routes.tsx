import { lazy, Suspense } from "react";
import iRoute from "./types/types.ts";
import Preloader from "../../shared/ui/preloader";

import { ROUTES } from "./lib/const.ts";

const EmploysPage = lazy(() => import("../../pages/employs/index.ts"));
const HomePage = lazy(() => import("../../pages/home/index.ts"));

export const PublicRoutes: iRoute[] = [
  {
    path: `/${ROUTES.home}`,
    element: (
      <Suspense fallback={<Preloader />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: `/${ROUTES.employees}`,
    element: (
      <Suspense fallback={<Preloader />}>
        <EmploysPage />
      </Suspense>
    ),
  },
  {
    path: `/${ROUTES.empty}`,
    element: (
      <div>
        <p>Ошибка 404</p>
      </div>
    ),
  },
];
