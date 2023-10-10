import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    language: "en",
    loading: null,
    searchMovies: null,
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
    changeLoading: (state, action) => {
      state.loading = action.payload;
    },
    addSearchMovies: (state, action) => {
      state.searchMovies = action.payload;
    },
  },
});

export const { changeLanguage, changeLoading, addSearchMovies } =
  searchSlice.actions;

export default searchSlice.reducer;
