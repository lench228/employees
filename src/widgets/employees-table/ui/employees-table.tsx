import { Suspense, useCallback, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  selectEmployees,
  selectIsEnd,
  selectIsLoading,
} from "../model/employees-table.slice.ts";
import Preloader from "../../../shared/ui/preloader";

import { AppDispatch } from "../../../app/store";
import {
  getQueryParameters,
  incrementPage,
  selectPage,
} from "../../../shared/ui/filter/model/filter.slice.tsx";
import { getEmployeesThunk } from "../api";

export const EmployeesTable = () => {
  const data = useSelector(selectEmployees);
  const query = useSelector(getQueryParameters);
  const isEnd = useSelector(selectIsEnd);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch<AppDispatch>();
  const observer = useRef<IntersectionObserver>(null);
  const page = useSelector(selectPage);

  const lastEmployeeRef = useCallback(
    (node: HTMLLIElement | null) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (query && !isEnd && !isLoading) {
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
    <Suspense fallback={<Preloader />}>
      {data.map((item, index) => {
        if (index === data.length - 1) {
          return (
            <li ref={lastEmployeeRef} key={item.id}>
              {item.name}
            </li>
          );
        } else {
          return (
            <li className={"h-20"} key={item.id}>
              {item.name}
            </li>
          );
        }
      })}
    </Suspense>
  );
};
