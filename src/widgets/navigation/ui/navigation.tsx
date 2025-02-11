import { Logo } from "../../../assets/icons/logo.tsx";
import classes from "./navigation.module.css";
import clsx from "clsx";
import { ThemeSwitcher } from "../../theme-switch/ui/theme-switcher.tsx";

export const Navigation = () => {
  return (
    <nav className={clsx(classes.container)}>
      <Logo />
      <ThemeSwitcher />
    </nav>
  );
};

export default Navigation;
