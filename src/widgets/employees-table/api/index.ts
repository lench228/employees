import { checkResponse, EMPLOYEE_URL } from "../../../shared/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { iServerResponseEmployee } from "../../../shared/api/types.ts";

export const getEmployees = (
  query: string,
  page: number,
): Promise<iServerResponseEmployee[]> =>
  fetch(`${EMPLOYEE_URL}?${query}&Page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return checkResponse<iServerResponseEmployee[]>(response);
  });

interface FetchEmployeesParams {
  query: string;
  page: number;
}

export const getEmployeesThunk = createAsyncThunk(
  "getEmployees",
  async (params: FetchEmployeesParams) => {
    return await getEmployees(params.query, params.page);
  },
);
