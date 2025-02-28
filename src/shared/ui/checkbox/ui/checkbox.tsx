import classes from "./checkbox.module.css";
import clsx from "clsx";

interface iCheckbox {
  isActive: boolean;
}

export const Checkbox = (props: iCheckbox) => {
  const { isActive } = { ...props };

  return (
    <div
      className={clsx(
        classes.checkbox,
        !isActive ? "bg-transparent" : "bg-accent",
      )}
    >
      {isActive && (
        <svg
          width="13"
          height="9"
          viewBox="0 0 13 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="-0.5"
            x2="8.22439"
            y2="-0.5"
            transform="matrix(0.729537 0.683941 -0.595228 0.803557 0 4.375)"
            stroke="white"
          />
          <line
            y1="-0.5"
            x2="11.4018"
            y2="-0.5"
            transform="matrix(0.613941 -0.789352 0.712652 0.701517 6 10)"
            stroke="white"
          />
        </svg>
      )}
    </div>
  );
};
