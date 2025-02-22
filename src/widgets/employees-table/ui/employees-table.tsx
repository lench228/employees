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
          <th
            className={
              "text-start  sm:w-[50px] mid:w-[400px] lg:pb-7 lg:w-[724px]"
            }
          >
            ФИО
          </th>
          <th className={"text-start  lg:pb-7 lg:w-[404px]"}>Должность</th>
          <th className={"text-start lg:pb-7 lg:w-[230px]"}>Телефон</th>
          <th className={"text-start  lg:pb-7 "}>Дата рождения</th>
        </tr>
      </thead>
      <tbody className={"px-3"}>
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
