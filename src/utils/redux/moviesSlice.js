import { createSlice } from "@reduxjs/toolkit";

const moviesSLice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    popularMovies: null,
    topRatedMovies: null, 
    upcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = moviesSLice.actions;
export default moviesSLice.reducer;
