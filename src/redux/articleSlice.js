import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  newses: [],
  error: "",
};
const HYGRAPH_ENDPOINT = import.meta.env.VITE_HYGRAPH_ENDPOINT;

export const fetchNewses = createAsyncThunk(
  "news/fetchNewses",
  (searchString = "") => {
    return axios
      .post(
        HYGRAPH_ENDPOINT,
        JSON.stringify({
          query: `query ($searchString: String!) {
            newses(where: { title_contains: $searchString }, first: 100) {
              id
              title
              photo {
                url
              }
              categories
            }
          }`,
          variables: {
            searchString: searchString,
          },
        })
      )
      .then((response) => {
        return response.data.data.newses;
      });
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
