import { Logo } from "../../../assets/icons/logo.tsx";
import classes from "./navigation.module.css";
import clsx from "clsx";
import { ThemeSwitch } from "../../theme-switch/ui/theme-switch.tsx";

export const Navigation = () => {
  return (
    <nav className={clsx(classes.container)}>
      <Logo />
      <ThemeSwitch />
    </nav>
  );
};

export default Navigation;
