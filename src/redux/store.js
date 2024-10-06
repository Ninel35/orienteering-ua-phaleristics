import {configureStore} from "@reduxjs/toolkit";
import newsReducer from "./articleSlice"

export default configureStore({
    reducer: {
        news: newsReducer,
    }
});