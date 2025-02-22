import { ThemeLight } from "../../../assets/icons/theme-light.tsx";
import classes from "./theme-switch.module.css";
import { ThemeDark } from "../../../assets/icons/theme-dark.tsx";

import clsx from "clsx";
import { UseLocalStorage } from "../../../shared/hooks/use-local-storage.tsx";
import { useEffect } from "react";

export const ThemeSwitch = () => {
  const [isActive, setIsActive] = UseLocalStorage("dark", false);

  const handleThemeSwitcherClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (!isActive) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isActive]);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        handleThemeSwitcherClick();
      }}
      className={clsx(classes.container, isActive && "flex-row-reverse")}
    >
      <input id={"#themeSwitcher"} type={"checkbox"} className={"hidden"} />
      <label htmlFor={"#themeSwitcher"} onClick={(e) => e.stopPropagation()}>
        {isActive ? <ThemeDark /> : <ThemeLight />}
      </label>
    </div>
  );
};
