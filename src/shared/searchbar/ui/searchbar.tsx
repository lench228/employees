import classes from "./searchbar.module.css";

export const Searchbar = () => {
  return (
    <input
      className={classes.input}
      id={"searchbar"}
      type={"text"}
      placeholder={"Поиск"}
    />
  );
};
