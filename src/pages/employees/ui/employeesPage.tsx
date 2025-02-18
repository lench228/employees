import EmployeesControls from "../../../widgets/employees-controls";
import EmployeesTable from "../../../widgets/employees-table";
import { useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux"; // Import shallowEqual
import {
  resetPages,
  selectQueryParameters,
} from "../../../widgets/filter/model/filter.slice.tsx";
import { AppDispatch } from "../../../app/store";
import { getEmployeesThunk } from "../../../widgets/employees-table/api";
import {
  selectEmployees,
  selectIsLoading,
} from "../../../widgets/employees-table/model/employees-table.slice.ts";
import { useMemo } from "react";

export const EmployeesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = useSelector(selectQueryParameters);
  const isLoading = useSelector(selectIsLoading);

  const navigateToNewURL = useCallback(() => {
    const searchString = query ? `?${query}` : "";
    const newUrl = location.pathname + searchString;

    if (newUrl !== location.pathname + location.search) {
      navigate(newUrl, { replace: true });
    }
  }, [query, location.pathname, navigate, location.search]);

  useEffect(() => {
    navigateToNewURL();
  }, [navigateToNewURL]);

  const data = useSelector(selectEmployees, shallowEqual);

  const dispatch = useDispatch<AppDispatch>();

  const fetchEmployees = useMemo(() => {
    return () => dispatch(getEmployeesThunk({ query: query, page: 1 }));
  }, [dispatch, query]);

  useEffect(() => {
    if (!data.length && !isLoading) {
      fetchEmployees();
    }
    return () => {
      dispatch(resetPages());
    };
  }, [data.length, fetchEmployees, isLoading]);

  return (
    <section>
      <EmployeesControls />
      <EmployeesTable></EmployeesTable>
    </section>
  );
};
