import React, { useEffect, useState } from "react";
import { HeaderContainer, MovieList } from "../components";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  const insideButton = "Search";
  const insideRoute = "/search";
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const i = Math.floor(Math.random() * 20) + 1;
    setIndex(i);
  }, []);

  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  const {
    popularMovies: popular,
    topRatedMovies: topRated,
    upcomingMovies: upcoming,
  } = useSelector((state) => state.movies);

  if (!movies || !popular || !topRated || !upcoming) return;

  const mainMovie = movies[index];

  return (
    <>
      <HeaderContainer
        insideButton={insideButton}
        insideRoute={insideRoute}
        title={mainMovie?.original_title}
        overview={mainMovie?.overview}
        movieId={mainMovie?.id}
      />
      <MovieList title="Now Playing" movies={movies} />
      <MovieList title="Top Rated" movies={topRated} />
      <MovieList title="Popular" movies={popular} />
      <MovieList title="Upcoming" movies={upcoming} />
    </>
  );
};

export default Browse;
