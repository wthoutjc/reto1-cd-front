import { createSlice } from "@reduxjs/toolkit";

// Interfaces
import { Filter } from "../interfaces";
import { AppState } from "../store";

const initialState: Filter = {
  current: null,
  option: null,
  value: null,
};

// Interface actions
interface SetFilter {
  payload: Filter;
}

const uiFilter = createSlice({
  name: "[FILTER]",
  initialState,
  reducers: {
    setFilter: (state: Filter, action: SetFilter) => {
      state.current = action.payload.current;
      state.option = action.payload.option;
      state.value = action.payload.value;
    },
    resetFilter: (state: Filter) => {
      state.current = null;
      state.value = null;
      state.option = null;
    }
  },
});

export { uiFilter };

// Actions
export const { setFilter, resetFilter} = uiFilter.actions;

// Select to access to the store
export const selectFilter = (state: AppState) => state.filter;

export default uiFilter.reducer;