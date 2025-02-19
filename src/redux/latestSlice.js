import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  newses: [],
  error: "",
};

export const fetchLatestNewses = createAsyncThunk(
  "latest/fetchAllNews",
  async ({ rejectWithValue }) => {
    try {
      const response = await fetch("/.netlify/functions/fetchLatestNewses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const newses = await response.json();
      return newses;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const newsesSlice = createSlice({
  name: "latestNews",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchLatestNewses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLatestNewses.fulfilled, (state, action) => {
      state.loading = false;
      state.newses = action.payload;
      state.error = "";
    });
    builder.addCase(fetchLatestNewses.rejected, (state, action) => {
      state.loading = false;
      state.newses = [];
      state.error = action.error.message;
    });
  },
});

export default newsesSlice.reducer;
