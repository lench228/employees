import classes from "./searchbar.module.css";
import { useDispatch } from "react-redux";
import { setQuery, setSearch } from "../../ui/filter/model/filter.slice.tsx";

export const Searchbar = () => {
  const dispatch = useDispatch();
  return (
    <input
      onChange={(e) => {
        dispatch(setSearch(e.target.value));
        dispatch(setQuery());
      }}
      className={classes.input}
      id={"searchbar"}
      type={"text"}
      placeholder={"Поиск"}
    />
  );
};
