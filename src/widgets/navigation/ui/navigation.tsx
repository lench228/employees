import { Logo } from "../../../assets/icons/logo.tsx";
import classes from "./navigation.module.css";

import ThemeSwitch from "../../theme-switch";

export const Navigation = () => {
  return (
    <nav className={classes.container}>
      <Logo />
      {window.screen.width > 1440 && (
        <div
          className={
            "flex items-center gap-16 ml-auto mr-12 text-lg/6 font-raleway"
          }
        >
          <a href={"tel:73432908476"}>+7 343 290 84 76</a>
          <a href={"mailto:info@66bit.ru"} className={"align-top"}>
            info@66bit.ru
          </a>
        </div>
      )}

      <ThemeSwitch />
    </nav>
  );
};
