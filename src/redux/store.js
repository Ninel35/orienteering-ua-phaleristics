import {configureStore} from "@reduxjs/toolkit";
import newsReducer from "./articleSlice";
import filterReducer from "./filterSlice";
import searchReducer from "./searchSlice";

export default configureStore({
    reducer: {
        news: newsReducer,
        filter: filterReducer,
        search: searchReducer
    }
});