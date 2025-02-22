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
        className={clsx(
          !isActive && "rotate-180",
          "lg:w-[20px] lg:h-[9px] w-[10px] h-[5px]",
        )}
        width="20"
        height="9"
        viewBox="0 0 20 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.67149 8.04873L8.52773 1.52873C9.33744 0.758733 10.6624 0.758733 11.4721 1.52873L18.3284 8.04873"
          stroke="#155DA4"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
