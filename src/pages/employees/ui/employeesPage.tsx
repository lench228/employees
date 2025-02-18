import EmployeesControls from "../../../widgets/employees-controls";
import EmployeesTable from "../../../widgets/employees-table";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  resetPages,
  selectQueryParameters,
} from "../../../widgets/filter/model/filter.slice.tsx";
import { AppDispatch } from "../../../app/store";
import { getEmployeesThunk } from "../../../widgets/employees-table/api";
import { selectEmployees } from "../../../widgets/employees-table/model/employees-table.slice.ts";

export const EmployeesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = useSelector(selectQueryParameters);

  useEffect(() => {
    const searchString = query ? `?${query}` : "";
    const newUrl = location.pathname + searchString;

    if (newUrl !== location.pathname + location.search) {
      navigate(newUrl, { replace: true });
    }
  }, [query, location.pathname, navigate, location.search]);

  const data = useSelector(selectEmployees);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!data.length) {
      dispatch(getEmployeesThunk({ query: query, page: 1 }));
      dispatch(resetPages());
    }
  }, []);

  return (
    <section>
      <EmployeesControls />
      <EmployeesTable></EmployeesTable>
    </section>
  );
};
