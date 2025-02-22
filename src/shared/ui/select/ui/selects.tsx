import classes from "./select.module.css";

import { Select } from "./select.tsx";
import { iFilterOption } from "../../../../widgets/filter/model/types.ts";
interface iFilterItem {
  options: iFilterOption[];
  query: string;
}

export const Selects = (props: iFilterItem) => {
  const { options, query } = { ...props };
  return (
    <ul key={query} className={classes.tooltipContainer}>
      {options.map((item) => (
        <Select key={item.value} {...item} query={query}></Select>
      ))}
    </ul>
  );
};
