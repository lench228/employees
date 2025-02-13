import classes from "./select.module.css";

import { iFilterOption } from "../../filter/model/types.ts";
import { Select } from "./select.tsx";
interface iFilterItem {
  options: iFilterOption[];
  query: string;
}

export const Selects = (props: iFilterItem) => {
  const { options, query } = { ...props };
  return (
    <ul className={classes.tooltipContainer}>
      {options.map((item) => (
        <Select {...item} query={query}></Select>
      ))}
    </ul>
  );
};
