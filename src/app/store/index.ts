import { configureStore } from "@reduxjs/toolkit";
import { BreadcrumbsSlice } from "../../shared/ui/breadcrumbs/model/breadcrumbs.slice.ts";
import FilterSlice from "../../shared/ui/filter/model/filter.slice.tsx";
import { EmployeesTableSlice } from "../../widgets/employees-table/model/employees-table.slice.ts";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Filter"],
};

const persistedReducer = persistReducer(persistConfig, FilterSlice.reducer);

const store = configureStore({
  reducer: {
    [BreadcrumbsSlice.name]: BreadcrumbsSlice.reducer,
    [FilterSlice.name]: persistedReducer,
    [EmployeesTableSlice.name]: EmployeesTableSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
