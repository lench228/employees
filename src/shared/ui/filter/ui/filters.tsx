import FilterTooltip from "./filter-item.tsx";
import Selector from "../../selector";
import classes from "./filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getActiveFilter, setActiveFilter } from "../model/filter.slice.tsx";
import filtersConfig from "../model/config.ts";
import { useEffect, useRef } from "react";

export const Filters = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(getActiveFilter);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        dispatch(setActiveFilter(""));
      }
    };

    if (activeFilter) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeFilter, dispatch]);

  return (
    <div className={classes.container} ref={containerRef}>
      {filtersConfig.map((config) => (
        <li key={config.query}>
          <Selector
            onClick={() => dispatch(setActiveFilter(config.query))}
            isActive={activeFilter === config.query}
            label={config.label}
          />
          {activeFilter === config.query && (
            <FilterTooltip options={config.options} />
          )}
        </li>
      ))}
    </div>
  );
};
