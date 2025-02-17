import classes from "./searchbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearch,
  setQuery,
  setSearch,
} from "../../../../widgets/filter/model/filter.slice.tsx";

export const Searchbar = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectSearch);
  return (
    <input
      onChange={(e) => {
        dispatch(setSearch(e.target.value));
        dispatch(setQuery());
      }}
      value={value}
      className={classes.input}
      id={"searchbar"}
      type={"text"}
      placeholder={"Поиск"}
    />
  );
};
