export const BASE_URL = " https://frontend-test-api.stk8s.66bit.ru/api";
export const EMPLOYEE_URL = BASE_URL + "/Employee";

export const checkResponse = async <T>(res: Response): Promise<T> => {
  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.error);
  }
  return res.json();
};
