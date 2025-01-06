import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  newses: [],
  error: "",
};
const HYGRAPH_ENDPOINT = import.meta.env.VITE_HYGRAPH_ENDPOINT;

export const fetchNewses = createAsyncThunk(
  "news/fetchAllNews",
  async (searchString = "", { rejectWithValue }) => {
    let allNews = [];
    let skip = 0;
    const batchSize = 100;
    let hasMore = true;

    try {
      while (hasMore) {
        const response = await axios.post(
          HYGRAPH_ENDPOINT,
          JSON.stringify({
            query: `query ($searchString: String!, $first: Int!, $skip: Int!) {
              newses(
                where: {OR: [{ title_contains: $searchString }, {text_contains: $searchString}]},
                first: $first,
                skip: $skip
              ) {
                id
                title
                photo {
                  url
                }
                categories
                year
              }
            }`,
            variables: {
              searchString: searchString,
              first: batchSize,
              skip: skip,
            },
          })
        );

        const newsBatch = response.data.data.newses;
        allNews = [...allNews, ...newsBatch];

        // Jeśli pobrana partia jest mniejsza niż 100, oznacza to, że to ostatnia partia.
        hasMore = newsBatch.length === batchSize;
        skip += batchSize;
      }

      return allNews;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
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
