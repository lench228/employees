import { checkResponse, EMPLOYEE_URL } from "../../../shared/api";

import { iServerResponseEmployee } from "../../../shared/api/types.ts";

export const getEmployee = (id: number): Promise<iServerResponseEmployee> =>
  fetch(`${EMPLOYEE_URL}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return checkResponse<iServerResponseEmployee>(response);
  });
