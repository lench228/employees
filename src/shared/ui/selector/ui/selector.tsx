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
        className={clsx(isActive && "rotate-180", "mid:w-[16px] mid:h-[7px]")}
        width="11"
        height="6"
        viewBox={window.screen.width < 320 ? "0 0 11 6" : "0 0 16 7"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 0.5L4.61616 5.09317C5.10227 5.63561 5.89773 5.63561 6.38384 5.09317L10.5 0.5"
          stroke="#155DA4"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};
