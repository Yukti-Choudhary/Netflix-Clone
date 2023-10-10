import React from "react";
import { SearchSelect } from "./style/searchLanguage";
import { useDispatch } from "react-redux";
import { LANGUAGE_SELECT } from "../../utils/constants";
import { changeLanguage } from "../../utils/redux/searchSlice";

const SearchLanguage = () => {
  const dispatch = useDispatch();
  
  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <SearchSelect onChange={handleLangChange}>
      {LANGUAGE_SELECT.map((lang) => {
        return (
          <option key={lang.name} value={lang.identifier}>
            {lang.name}
          </option>
        );
      })}
    </SearchSelect>
  );
};

export default SearchLanguage;
