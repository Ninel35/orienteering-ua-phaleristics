import {configureStore} from "@reduxjs/toolkit";
import newsReducer from "./articleSlice";
import filterReducer from "./filterSlice"

export default configureStore({
    reducer: {
        news: newsReducer,
        filter: filterReducer,
    }
});