import { configureStore } from "@reduxjs/toolkit";
import { BreadcrumbsSlice } from "../../shared/ui/breadcrumbs/model/breadcrumbs.slice.ts";

const store = configureStore({
  reducer: {
    [BreadcrumbsSlice.name]: BreadcrumbsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
