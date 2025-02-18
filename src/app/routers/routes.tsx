import { lazy } from "react";
import iRoute from "./types/types.ts";

import { ROUTES } from "./lib/const.ts";

const EmploysPage = lazy(() => import("../../pages/employees/index.ts"));
const HomePage = lazy(() => import("../../pages/home/index.ts"));
const EmployeePage = lazy(() => import("../../pages/employee/index.ts"));

export const PublicRoutes: iRoute[] = [
  {
    path: `${ROUTES.home}`,
    element: <HomePage />,
  },
  {
    path: `${ROUTES.employees}`,
    element: <EmploysPage />,
  },
  {
    path: `${ROUTES.employees}/${ROUTES.employee}`,
    element: <EmployeePage />,
  },
  {
    path: `/${ROUTES.empty}`,
    element: <div className={"text-center my-auto text-4xl"}>Ошибка 404</div>,
  },
];
