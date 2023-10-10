import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/redux/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
