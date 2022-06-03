import { createSlice } from "@reduxjs/toolkit";

// Interfaces
import { IUx } from "../interfaces";
import { AppState } from "../store";

const initialState: IUx = {
  clicks: 0,
  sidebar: {
    open: false,
  }
};

const uxSlice = createSlice({
  name: "[UX]",
  initialState,
  reducers: {
    incrementClicks: (state) => {
      state.clicks += 1;
    },
    turnOffRender: (state) => {
      state.clicks = 0;
    },
    toggleSidebar: (state) => {
      state.sidebar = {
        ...state.sidebar,
        open: !state.sidebar.open,
      }
    },
  },
});

export { uxSlice };

// Actions
export const { incrementClicks, turnOffRender, toggleSidebar } = uxSlice.actions;

// Selector to access to the store
export const selectUX = (state: AppState) => state.ux;

export default uxSlice.reducer;
