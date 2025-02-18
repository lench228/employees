import { useSelector } from "react-redux";

import { selectEmployees } from "../model/employees-table.slice.ts";
import EmployeesTableItem from "./employees-table-item.tsx";

import classes from "./employees-table.module.css";

export const EmployeesTable = () => {
  const data = useSelector(selectEmployees);
  // Не получается адекватно стилизовать таблицу, офк можно сделать через гриды, но
  // семантика нарушится

  if (!data.length) {
    return (
      <div className={"text-center my-auto text-3xl dark:text-main-dark"}>
        Сотрудники не найдены
      </div>
    );
  }
  return (
    <table className={classes.table}>
      <thead className={classes.thead}>
        <tr className={classes.headLabels}>
          <th className={"text-start  lg:pb-7"}>ФИО</th>
          <th className={"text-start  lg:pb-7"}>Должность</th>
          <th className={"text-start  lg:pb-7"}>Телефон</th>
          <th className={"text-start  lg:pb-7"}>Дата рождения</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          const { id, birthdate, name, phone, position } = { ...item };
          return index === data.length - 1 ? (
            <EmployeesTableItem
              isLast={true}
              key={item.id}
              employee={{ name, position, phone, birthdate }}
              id={id}
            />
          ) : (
            <EmployeesTableItem
              key={item.id}
              employee={{ name, position, phone, birthdate }}
              id={id}
            />
          );
        })}
      </tbody>
    </table>
  );
};
