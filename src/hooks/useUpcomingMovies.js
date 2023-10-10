import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/redux/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addUpcomingMovies(data.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
