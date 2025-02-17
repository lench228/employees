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
      const path =
        action.payload.endsWith("/") && action.payload.length > 1
          ? action.payload.slice(0, -1)
          : action.payload;

      if (path === "/") {
        state.crumbs = [];
        return;
      }

      const filtered = path.split("/");

      state.crumbs = filtered.map((item, index) => {
        let label = item;
        if (index === 0) {
          label = "Главная";
        } else if (item === ROUTES.employees) {
          label = "Список сотрудников";
        }

        //Build up path using joined segments
        const routePath = "/" + filtered.slice(0, index + 1).join("/");

        return {
          path: routePath,
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
