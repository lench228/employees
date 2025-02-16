import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../../../widgets/navigation";
import clsx from "clsx";
import classes from "./layout.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { generateCrumbs } from "../../../shared/ui/breadcrumbs/model/breadcrumbs.slice.ts";
import Breadcrumbs from "../../../shared/ui/breadcrumbs";

export const Layout = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateCrumbs(location.pathname));
  }, [location.pathname, dispatch]);

  return (
    <div className="w-full h-full">
      <header className={clsx(classes.header)}>
        <Navigation />
      </header>
      <Breadcrumbs></Breadcrumbs>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
