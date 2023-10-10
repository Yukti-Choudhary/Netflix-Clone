import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "./signUpSlice";
import moviesSlice from "./moviesSlice";
import searchSlice from "./searchSlice";

const appStore = configureStore({
  reducer: {
    signUp: signUpSlice,
    movies: moviesSlice,
    search: searchSlice,
  },
});

export default appStore;
