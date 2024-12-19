import { createSlice } from "@reduxjs/toolkit";


const initialState = {
search: '',
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
      setSearchAction: (state, {payload} )=>{
          return {
              search: payload
          }
      }
    }
  });
  
  export default searchSlice.reducer;
  export const {setSearchAction} = searchSlice.actions