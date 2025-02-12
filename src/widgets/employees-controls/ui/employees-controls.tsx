import Searchbar from "../../../shared/searchbar";
import { Filters } from "../../../shared/ui/filter/ui/filters.tsx";
import classes from "./employees-controls.module.css";
import ChosenFilters from "../../../shared/ui/filter/ui/chosen-filters.tsx";

export const EmployeesControls = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Список сотрудников</h1>
      <Searchbar></Searchbar>
      <Filters></Filters>
      <ChosenFilters></ChosenFilters>
    </header>
  );
};
