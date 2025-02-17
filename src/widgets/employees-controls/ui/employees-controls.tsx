import classes from "./employees-controls.module.css";
import SelectedFilters from "../../../shared/ui/selected-filters";
import { Filters } from "../../filter/ui/filters.tsx";
import Searchbar from "../../../shared/ui/searchbar";

export const EmployeesControls = () => {
  return (
    <header className={classes.header}>
      {window.screen.width >= 1920 ? (
        <>
          <div className={"flex items-center justify-between w-full"}>
            <h1 className={classes.title}>Список сотрудников</h1>
            <Filters></Filters>
          </div>
          <Searchbar />
          <SelectedFilters></SelectedFilters>
        </>
      ) : (
        <>
          <h1 className={classes.title}>Список сотрудников</h1>
          <Searchbar />
          <Filters />
          <SelectedFilters />
        </>
      )}
    </header>
  );
};
