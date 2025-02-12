import clsx from "clsx";

import classes from "./selector.module.css";

interface iSelector {
  isActive: boolean;
  label: string;
  onClick: () => void;
}

export const Selector = (props: iSelector) => {
  const { label, isActive, onClick } = { ...props };

  return (
    <div className={classes.container} onClick={onClick}>
      <p
        className={clsx(classes.label, isActive && "!text-accent font-medium")}
      >
        {label}
      </p>

      <svg
        className={clsx(isActive && "rotate-180", "w-[5px] h-[10px]")}
        width={"20"}
        height="9"
        viewBox="0 0 20 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.67149 0.951267L8.52773 7.47127C9.33744 8.24127 10.6624 8.24127 11.4721 7.47127L18.3284 0.951267"
          stroke="#155DA4"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};
