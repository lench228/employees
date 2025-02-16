import { useSelector } from "react-redux";

import { selectEmployees } from "../model/employees-table.slice.ts";
import EmployeesTableItem from "./employees-table-item.tsx";

import classes from "./employees-table.module.css";

export const EmployeesTable = () => {
  const data = useSelector(selectEmployees);

  return (
    <table className={classes.table}>
      <thead className={classes.thead}>
        <tr className={classes.headLabels}>
          <th className={"text-start"}>ФИО</th>
          <th className={"text-start px-3"}>Должность</th>
          <th className={"text-start px-3"}>Телефон</th>
          <th className={"text-start px-3"}>Дата рождения</th>
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
