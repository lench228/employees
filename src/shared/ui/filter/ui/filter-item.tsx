import classes from "./filter.module.css";
import { iFilterOption } from "../model/types.ts";
interface iFilterItem {
  options: iFilterOption[];
}

const FilterItem = (props: iFilterItem) => {
  const { options } = { ...props };
  return (
    <ul className={classes.tooltipContainer}>
      {options.map((item) => (
        <li className={classes.tooltipItem}>
          <label className={classes.label} htmlFor={item.value}>
            {item.label}
          </label>
          {/*todo custom checkbox*/}
          <input
            id={item.value}
            type={"checkbox"}
            className={classes.filterItem}
          />
        </li>
      ))}
    </ul>
  );
};

export default FilterItem;
