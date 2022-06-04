import { createSlice } from "@reduxjs/toolkit";

// Interfaces
import { IUx } from "../interfaces";
import { AppState } from "../store";

const initialState: IUx = {
  clicks: 0,
  sidebar: {
    open: false,
  },
};

const uxSlice = createSlice({
  name: "[UX]",
  initialState,
  reducers: {
    incrementClicks: (state: IUx) => {
      state.clicks += 1;
    },
    turnOffRender: (state: IUx) => {
      state.clicks = 0;
    },
    toggleSidebar: (state: IUx) => {
      state.sidebar = {
        ...state.sidebar,
        open: !state.sidebar.open,
      };
    },
  },
});

export { uxSlice };

// Actions
export const { incrementClicks, turnOffRender, toggleSidebar } =
  uxSlice.actions;

// Selector to access to the store
export const selectUX = (state: AppState) => state.ux;

export default uxSlice.reducer;
