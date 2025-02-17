import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ROUTES } from "../../../../app/routers/lib/const.ts";

type iCrumb = {
  path: string;
  label: string;
};

interface iBreadcrumbs {
  crumbs: iCrumb[];
}

const initialState: iBreadcrumbs = {
  crumbs: [],
};

// Возможно лишнее добавлять крошки в слайс, но в теории удобно и правильно
// не нравятся волшебные строки

export const BreadcrumbsSlice = createSlice({
  name: "Breadcrumbs",
  initialState,
  reducers: {
    generateCrumbs(state, action: PayloadAction<string>) {
      if (action.payload === "/") {
        state.crumbs = [];
        return;
      }

      const filtered = action.payload.split("/");

      state.crumbs = filtered.map((item) => {
        const label =
          item === ""
            ? "Главная"
            : item === ROUTES.employees
              ? "Список сотрудников"
              : item;
        return {
          path: item,
          label: label,
        };
      });
    },
  },
  selectors: {
    selectCrumbs: (store) => store.crumbs,
  },
});

export const { generateCrumbs } = BreadcrumbsSlice.actions;
export const { selectCrumbs } = BreadcrumbsSlice.selectors;
