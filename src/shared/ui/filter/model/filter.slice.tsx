import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iFilterConfig, iFilterOption } from "./types.ts";

interface iFilterSlice {
  activeFilter: string;
  chosen: Omit<iFilterConfig, "label">[];
  query: string;
  search: string;
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
  search: "",
  page: 1,
};

const loadState = (): iFilterSlice => {
  try {
    const serializedState = localStorage.getItem("filterState");
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch {
    return initialState;
  }
};

const saveState = (state: iFilterSlice) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("filterState", serializedState);
  } catch (err) {
    console.error("Could not save state to localStorage", err);
  }
};

const FilterSlice = createSlice({
  name: "Filter",
  initialState: loadState(),
  reducers: {
    setActiveFilter: (state, action: PayloadAction<string>) => {
      state.activeFilter = action.payload;
      saveState(state);
    },
    resetPages: (state) => {
      state.page = 1;
      saveState(state);
    },
    incrementPage: (state) => {
      state.page++;
      saveState(state);
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
      saveState(state);
    },
    removeFilter: (state, action: PayloadAction<iFilterOption>) => {
      state.chosen.forEach((item) => {
        item.options = item.options.filter(
          (option) => option.value !== action.payload.value,
        );
      });
      saveState(state);
    },
    setQuery: (state) => {
      const params: string[] = [];
      state.chosen.forEach((filter) => {
        if (filter.options.length > 0) {
          const values = filter.options.map((option) => option.value).join(",");
          params.push(`${filter.query}=${values}`);
        }
      });
      params.push(`Name=${state.search}`);
      state.query = params.join("&");
      saveState(state);
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      saveState(state);
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
  setSearch,
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
