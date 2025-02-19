import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./articleSlice";
import filterReducer from "./filterSlice";
import searchReducer from "./searchSlice";
import latestReducer from "./latestSlice";

export default configureStore({
  reducer: {
    news: newsReducer,
    filter: filterReducer,
    search: searchReducer,
    latestNews: latestReducer,
  },
});
