import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
  year: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterAction: (state, { payload }) => {
      return {
        filter: payload,
      };
    },
    setYearAction: (state, { payload }) => {
      return {
        year: payload,
      };
    },
  },
});

export default filterSlice.reducer;
export const { setFilterAction, setYearAction } = filterSlice.actions;
