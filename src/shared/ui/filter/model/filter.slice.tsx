import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iFilterConfig, iFilterOption } from "./types.ts";

interface iFilterSlice {
  activeFilter: string;
  chosen: Omit<iFilterConfig, "label">[];
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
};

const FilterSlice = createSlice({
  name: "Filter",
  initialState,
  reducers: {
    setActiveFilter: (state, action: PayloadAction<string>) => {
      state.activeFilter = action.payload;
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
      const filterName = state.chosen.filter(
        (item) =>
          item.options.filter((item) => item.value === action.payload.value)
            .length > 0,
      )[0];
      if (filterName) {
        const valueIndex = filterName.options.findIndex(
          (item) => item.value === action.payload.value,
        );

        if (valueIndex > -1) {
          filterName.options.splice(valueIndex, 1);
        } else {
          filterName.options.push(action.payload);
        }
      }
    },
  },
  selectors: {
    getActiveFilter: (state) => state.activeFilter,
    getChosenFilters: (state) => state.chosen,
  },
});

export const { setActiveFilter, toggleFilter, removeFilter } =
  FilterSlice.actions;
export const { getActiveFilter, getChosenFilters } = FilterSlice.selectors;

export default FilterSlice;
