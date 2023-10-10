import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSearchMovies, changeLoading } from "../utils/redux/searchSlice";
import { API_OPTIONS } from "../utils/constants";

const useGptSearch = () => {
  const [searchError, setSearchError] = useState(null);
  const dispatch = useDispatch();

  const getSearchResults = async (searchValue) => {
    dispatch(changeLoading(true));

    if (!searchValue) {
      dispatch(changeLoading(false));
      return;
    }

    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&page=1`,
      API_OPTIONS
    );
    const data = await res.json();

    if (data.results.length > 0) {
      setSearchError(null);
      dispatch(changeLoading(false));
      dispatch(addSearchMovies(data.results));
    } else {
      setSearchError(
        "We couldn't find the movie you're looking for. Please try searching for something else!"
      );
      dispatch(changeLoading(null));
    }
  };

  return { searchError, getSearchResults };
};

export default useGptSearch;
