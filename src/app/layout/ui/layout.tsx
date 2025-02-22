import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../../../widgets/navigation";
import clsx from "clsx";
import classes from "./layout.module.css";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { generateCrumbs } from "../../../widgets/breadcrumbs/model/breadcrumbs.slice.ts";
import Breadcrumbs from "../../../widgets/breadcrumbs";
import Preloader from "../../../shared/ui/preloader";

export const Layout = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateCrumbs(location.pathname));
  });

  return (
    <div className="w-full h-full  lg:items-center">
      <header className={clsx(classes.header)}>
        <Navigation />
      </header>
      <Breadcrumbs></Breadcrumbs>
      <main className={"w-full"}>
        <Suspense fallback={<Preloader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
