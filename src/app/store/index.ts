import { configureStore } from "@reduxjs/toolkit";
import { BreadcrumbsSlice } from "../../shared/ui/breadcrumbs/model/breadcrumbs.slice.ts";
import FilterSlice from "../../shared/ui/filter/model/filter.slice.tsx";
import { EmployeesTableSlice } from "../../widgets/employees-table/model/employees-table.slice.ts";

const store = configureStore({
  reducer: {
    [BreadcrumbsSlice.name]: BreadcrumbsSlice.reducer,
    [FilterSlice.name]: FilterSlice.reducer,
    [EmployeesTableSlice.name]: EmployeesTableSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
