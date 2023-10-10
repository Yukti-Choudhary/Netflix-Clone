import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    language: "en",
    loading: false,
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
    changeLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { changeLanguage, changeLoading } = searchSlice.actions;
export default searchSlice.reducer;
