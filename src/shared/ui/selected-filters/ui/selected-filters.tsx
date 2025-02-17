import { useDispatch, useSelector } from "react-redux";
import {
  getChosenFilters,
  getQueryParameters,
  removeFilter,
  resetPages,
  setQuery,
  toggleFilter,
} from "../../filter/model/filter.slice.tsx";
import classes from "./selected-filters.module.css";
import { iFilterOption } from "../../filter/model/types.ts";
import { Button } from "../../button/ui/button.tsx";

import { getEmployeesThunk } from "../../../../widgets/employees-table/api";
import { AppDispatch } from "../../../../app/store";
import {
  deleteEmployees,
  selectIsLoading,
} from "../../../../widgets/employees-table/model/employees-table.slice.ts";

export const SelectedFilters = () => {
  const filters = useSelector(getChosenFilters);
  const query = useSelector(getQueryParameters);

  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch<AppDispatch>();

  const handleTagClick = (item: iFilterOption) => {
    dispatch(removeFilter(item));
    dispatch(toggleFilter(item));
    dispatch(setQuery());
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Выбранные фильтры:</h2>
      <ul className={classes.tags}>
        {filters.map((item) => {
          return item.options.map((item) => (
            <li className={classes.tag} onClick={() => handleTagClick(item)}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.67824 4.99992L9.85953 0.818698C10.0468 0.631402 10.0468 0.327767 9.85953 0.140471C9.67223 -0.0468238 9.36859 -0.0468238 9.18129 0.140471L5 4.32169L0.818711 0.141111C0.631412 -0.0461846 0.327772 -0.0461846 0.140474 0.141111C-0.0468245 0.328406 -0.0468245 0.632042 0.140474 0.819337L4.32176 5.00056L0.141113 9.18114C-0.0461853 9.36844 -0.0461853 9.67207 0.141113 9.85937C0.235082 9.9527 0.357177 10 0.479912 10C0.602646 10 0.725381 9.95334 0.818711 9.85937L5 5.67815L9.18129 9.85937C9.27526 9.9527 9.39735 10 9.52009 10C9.64282 10 9.76556 9.95334 9.85889 9.85937C10.0462 9.67207 10.0462 9.36844 9.85889 9.18114L5.67824 4.99992Z"
                  fill="#292929"
                  className={
                    "dark:fill-main-dark transition-colors duration-500 ease-in-out"
                  }
                />
              </svg>
              <p>{item.label}</p>
            </li>
          ));
        })}
      </ul>
      <Button
        onClick={() => {
          dispatch(deleteEmployees());
          dispatch(resetPages());

          if (!isLoading) {
            dispatch(getEmployeesThunk({ query: query, page: 1 }));
          }
        }}
        type={"button"}
      >
        Найти
      </Button>
    </div>
  );
};
