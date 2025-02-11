import { ThemeLight } from "../../../assets/icons/theme-light.tsx";
import classes from "./theme-switcher.module.css";
import { ThemeDark } from "../../../assets/icons/theme-dark.tsx";
import React from "react";
import clsx from "clsx";

export const ThemeSwitcher = () => {
  const [isActive, setIsActive] = React.useState(false);

  const handleThemeSwitcherClick = () => {
    setIsActive(!isActive);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      onClick={handleThemeSwitcherClick}
      className={clsx(classes.container, isActive && "flex-row-reverse")}
    >
      <input id={"#themeSwitcher"} type={"checkbox"} className={"hidden"} />
      <label
        htmlFor={"#themeSwitcher"}
        className={clsx()}
        onClick={(e) => e.stopPropagation()}
      >
        {isActive ? <ThemeDark /> : <ThemeLight />}
      </label>
    </div>
  );
};
