import { iServerResponseEmployee } from "./types.ts";
import { createSlice } from "@reduxjs/toolkit";
import { getEmployeesThunk } from "../api";

interface iEmployeesState {
  employees: iServerResponseEmployee[];

  isEnd: boolean;
  isLoading: boolean;
}

const initialState: iEmployeesState = {
  employees: [],

  isEnd: false,
  isLoading: false,
};

export const EmployeesTableSlice = createSlice({
  name: "Employees",
  initialState,
  reducers: {
    deleteEmployees: (state) => {
      state.employees = [];
    },
  },
  selectors: {
    selectEmployees: (store) => store.employees,
    selectIsEnd: (store) => store.isEnd,
    selectIsLoading: (store) => store.isLoading,
  },
  extraReducers: (builder) => {
    builder.addCase(getEmployeesThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEmployeesThunk.fulfilled, (state, action) => {
      if (action.payload.length) {
        state.isEnd = false;
        state.employees = state.employees.concat(action.payload);
      } else {
        state.isEnd = true;
      }
      state.isLoading = false;
    });
    builder.addCase(getEmployeesThunk.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { selectEmployees, selectIsEnd, selectIsLoading } =
  EmployeesTableSlice.selectors;

export const { deleteEmployees } = EmployeesTableSlice.actions;
