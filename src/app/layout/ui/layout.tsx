import { Outlet } from "react-router-dom";
import Navigation from "../../../widgets/navigation";
import clsx from "clsx";
import classes from "./layout.module.css";

export const Layout = () => {
  return (
    <div className="w-full h-full">
      <header className={clsx(classes.header)}>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
