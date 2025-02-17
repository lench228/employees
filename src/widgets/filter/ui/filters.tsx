import classes from "./filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveFilter, setActiveFilter } from "../model/filter.slice.tsx";
import filtersConfig from "../model/config.ts";
import { useEffect, useRef } from "react";
import Selects from "../../../shared/ui/select";
import Selector from "../../../shared/ui/selector";

export const Filters = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  const containerRef = useRef<HTMLUListElement>(null);

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
    <ul className={classes.container} ref={containerRef}>
      {filtersConfig.map((config) => (
        <li key={config.query}>
          <Selector
            onClick={() => dispatch(setActiveFilter(config.query))}
            isActive={activeFilter === config.query}
            label={config.label}
          />
          {activeFilter === config.query && (
            <Selects options={config.options} query={config.query} />
          )}
        </li>
      ))}
    </ul>
  );
};
