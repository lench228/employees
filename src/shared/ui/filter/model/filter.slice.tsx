import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iFilterSlice {
  activeFilter: string;
}

const initialState: iFilterSlice = {
  activeFilter: "",
};

const FilterSlice = createSlice({
  name: "Filter",
  initialState,
  reducers: {
    setActiveFilter: (state, action: PayloadAction<string>) => {
      state.activeFilter = action.payload;
    },
  },
  selectors: {
    getActiveFilter: (store) => store.activeFilter,
  },
});

export const { setActiveFilter } = FilterSlice.actions;
export const { getActiveFilter } = FilterSlice.selectors;

export default FilterSlice;
