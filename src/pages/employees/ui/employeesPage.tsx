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

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getEmployeesThunk({ query: query, page: 1 }));
    dispatch(resetPages());
  }, []);

  return (
    <section
      className={"mid:mx-[180px] sm:mx-[24px] px-0 lg:max-w-[1560px] lg:m-auto"}
    >
      <EmployeesControls />
      <EmployeesTable />
    </section>
  );
};
