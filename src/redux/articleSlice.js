import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  newses: [],
  error: "",
};

export const fetchNewses = createAsyncThunk(
  "news/fetchAllNews",
  async (searchString = "", { rejectWithValue }) => {
    try {
      const response = await fetch("/.netlify/functions/fetchNewses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ searchString }),
      });

      const newses = await response.json();
      return newses;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const newsesSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchNewses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNewses.fulfilled, (state, action) => {
      state.loading = false;
      state.newses = action.payload;
      state.error = "";
    });
    builder.addCase(fetchNewses.rejected, (state, action) => {
      state.loading = false;
      state.newses = [];
      state.error = action.error.message;
    });
  },
});

export default newsesSlice.reducer;
