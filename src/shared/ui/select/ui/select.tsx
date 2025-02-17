import classes from "./select.module.css";
import Checkbox from "../../checkbox";

import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectChosenFilters,
  setQuery,
  toggleFilter,
} from "../../../../widgets/filter/model/filter.slice.tsx";

import { iFilterOption } from "../../../../widgets/filter/model/types.ts";

interface SelectProps extends iFilterOption {
  query: string;
}

export const Select = (props: SelectProps) => {
  const { value, label, query } = { ...props };

  const chosenFilters = useSelector(selectChosenFilters);

  const isActive =
    chosenFilters
      .find((item) => item.query === query)
      ?.options.some((option) => option.value === value) || false;

  const liRef = useRef<HTMLLIElement>(null);

  const dispatch = useDispatch();

  const handleLiClick = () => {
    dispatch(toggleFilter({ value, label }));
    dispatch(setQuery());
  };

  useEffect(() => {}, [isActive, label]);

  return (
    <li
      key={value}
      ref={liRef}
      className={classes.tooltipItem}
      id={props.value}
      onClick={handleLiClick}
    >
      <label className={classes.label} htmlFor={value}>
        {label}
      </label>
      <Checkbox isActive={isActive} />
    </li>
  );
};
