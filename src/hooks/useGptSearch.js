import { useState } from "react";
import openai from "../utils/openai";
import { useDispatch } from "react-redux";
import { changeLoading } from "../utils/redux/searchSlice";

const useGptSearch = () => {
  const [searchError, setSearchError] = useState(null);
  const dispatch = useDispatch();

  const getSearchResults = async (searchValue) => {
    dispatch(changeLoading(true));
    if (!searchValue) return;
    
    const getQuery =
      "Act as movie recommendation system and suggest 6 movie names for the query -" +
      searchValue +
      ".Names should be coma separated like the example ahead. Example- Twilight, Avengers,Thor,Gadar, Sholay, Koi Mil Gya.";

    try {
      const results = await openai.chat.completions.create({
        messages: [{ role: "user", content: getQuery }],
        model: "gpt-3.5-turbo",
      });

      console.log(results.choices);
      dispatch(changeLoading(false));
    } catch (error) {
      setSearchError(error.message);
      dispatch(changeLoading(false));
    }
  };

  return { searchError, getSearchResults };
};

export default useGptSearch;
