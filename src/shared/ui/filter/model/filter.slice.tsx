import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iFilterConfig, iFilterOption } from "./types.ts";

interface iFilterSlice {
  activeFilter: string;
  chosen: Omit<iFilterConfig, "label">[];

  query: string;
  page: number;
}

const initialState: iFilterSlice = {
  activeFilter: "",
  chosen: [
    {
      query: "Stack",
      options: [],
    },
    {
      query: "Gender",
      options: [],
    },
    {
      query: "Position",
      options: [],
    },
  ],

  query: "",
  page: 1,
};

const FilterSlice = createSlice({
  name: "Filter",
  initialState,
  reducers: {
    setActiveFilter: (state, action: PayloadAction<string>) => {
      state.activeFilter = action.payload;
    },
    resetPages: (state) => {
      state.page = 1;
    },
    incrementPage: (state) => {
      state.page++;
    },
    toggleFilter: (state, action: PayloadAction<iFilterOption>) => {
      const activeFilter = state.activeFilter;
      const chosenFilter = state.chosen.find(
        (item) => item.query === activeFilter,
      );

      if (chosenFilter) {
        const valueIndex = chosenFilter.options.findIndex(
          (item) => item.value === action.payload.value,
        );

        if (valueIndex > -1) {
          chosenFilter.options.splice(valueIndex, 1);
        } else {
          chosenFilter.options.push(action.payload);
        }
      }
    },
    removeFilter: (state, action: PayloadAction<iFilterOption>) => {
      state.chosen.forEach((item) => {
        item.options = item.options.filter(
          (option) => option.value !== action.payload.value,
        );
      });
    },

    setQuery: (state) => {
      const params: string[] = [];
      state.chosen.forEach((filter) => {
        if (filter.options.length > 0) {
          const values = filter.options.map((option) => option.value).join(",");
          params.push(`${filter.query}=${values}`);
        }
      });

      state.query = params.join("&");
    },
  },
  selectors: {
    getActiveFilter: (state) => state.activeFilter,
    getChosenFilters: (state) => state.chosen,
    getQueryParameters: (state) => state.query,
    selectPage: (state) => state.page,
  },
});

export const {
  resetPages,
  incrementPage,
  setActiveFilter,
  toggleFilter,
  removeFilter,
  setQuery,
} = FilterSlice.actions;
export const {
  getActiveFilter,
  getChosenFilters,
  getQueryParameters,
  selectPage,
} = FilterSlice.selectors;

export default FilterSlice;
