import { ButtonHTMLAttributes } from "react";
import classes from "./button.module.css";
// interface iButton {}

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { type, children, onClick } = { ...props };
  return (
    <button onClick={onClick} className={classes.button} type={type}>
      {children}
    </button>
  );
};
