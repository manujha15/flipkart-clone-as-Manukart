import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "", // Ensure it has a default value (empty string)
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
