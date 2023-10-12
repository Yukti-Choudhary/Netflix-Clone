import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/redux/moviesSlice";

const useMovieId = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const getMovieTrailer = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const data = await res.json();

      const filterData = data.results?.find(
        (video) => video.type === "Trailer"
      ); 
      const trailer = filterData ? filterData : data.results[0];

      dispatch(addTrailer(trailer?.key));
    };

    getMovieTrailer();
  }, [movieId, dispatch]);
};

export default useMovieId;
