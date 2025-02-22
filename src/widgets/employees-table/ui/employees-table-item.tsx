import { useCallback, useRef } from "react";

import { getEmployeesThunk } from "../api";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsEnd,
  selectIsLoading,
} from "../model/employees-table.slice.ts";
import { AppDispatch } from "../../../app/store";

import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../app/routers/lib/const.ts";

import classes from "./employees-table.module.css";
import {
  incrementPage,
  selectPage,
  selectQueryParameters,
} from "../../filter/model/filter.slice.tsx";
import EmployeeTableLabel from "../../../shared/ui/employee-table-label";

interface iEmployeesTableItem {
  isLast?: boolean;
  id: number;
  employee: {
    name: string;
    birthdate: string;
    position: string;
    phone: string;
  };
}
const EmployeesTableItem = (props: iEmployeesTableItem) => {
  const { isLast, employee, id } = { ...props };

  const nav = useNavigate();

  const query = useSelector(selectQueryParameters);
  const isEnd = useSelector(selectIsEnd);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch<AppDispatch>();
  const observer = useRef<IntersectionObserver>(null);
  const page = useSelector(selectPage);

  const handleTableElementClick = () => {
    nav("/" + ROUTES.employees + "/" + id);
  };

  const lastEmployeeRef = useCallback(
    (node: HTMLTableRowElement | null) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (!isEnd && !isLoading) {
            dispatch(incrementPage());
            dispatch(getEmployeesThunk({ query, page: page + 1 }));
          }
        }
      });

      if (node) observer.current.observe(node);
    },
    [dispatch, query, isEnd, isLoading, page],
  );

  return (
    <tr
      onClick={handleTableElementClick}
      className={classes.hoverBg}
      key={id}
      ref={isLast ? lastEmployeeRef : undefined}
    >
      {Object.values(employee).map((value, index) => (
        <EmployeeTableLabel key={index} label={value} />
      ))}
    </tr>
  );
};

export default EmployeesTableItem;
