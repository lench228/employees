import { configureStore } from "@reduxjs/toolkit";
import { BreadcrumbsSlice } from "../../shared/ui/breadcrumbs/model/breadcrumbs.slice.ts";
import FilterSlice from "../../shared/ui/filter/model/filter.slice.tsx";

const store = configureStore({
  reducer: {
    [BreadcrumbsSlice.name]: BreadcrumbsSlice.reducer,
    [FilterSlice.name]: FilterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
