import React, { useRef } from "react";
import {
  OptFormBreak,
  OptFormButton,
  OptFormContainer,
  OptFormInput,
  OptFormText,
  OptFormErrorText,
  OptFormInsideContainer,
  OptFormInsideText,
} from "./style/optForm";
import useAuthState from "../../hooks/useAuthState";
import { useSelector } from "react-redux";
import lang from "../../fixtures/languageList";
import useGptSearch from "../../hooks/useGptSearch";

const OptForm = ({ insideButton, children }) => {
  const user = useAuthState();
  const searchRef = useRef();
  const langKey = useSelector((state) => state.search.language);
  const { searchError, getSearchResults } = useGptSearch();
  const loading = useSelector((state) => state.search.loading);

  const handleSearch = () => {
    getSearchResults(searchRef.current.value);
  };

  return insideButton ? (
    <OptFormInsideContainer onSubmit={(e) => e.preventDefault()}>
      <OptFormInsideText>
        {lang[langKey].hello} {user.displayName} ! {lang[langKey].greet}
      </OptFormInsideText>
      <OptFormBreak />
      <OptFormInput
        placeholder={lang[langKey].searchPlaceholder}
        ref={searchRef}
      />
      <OptFormButton onClick={handleSearch}>
        {lang[langKey].search}
        <img src="/images/icons/chevron-right.png" alt="Search" />
      </OptFormButton>
      {searchError && !loading && (
        <OptFormErrorText>{searchError}</OptFormErrorText>
      )}
      {children}
    </OptFormInsideContainer>
  ) : (
    <OptFormContainer>
      <OptFormInput placeholder="Email Address" />
      <OptFormButton>
        Try it now
        <img src="/images/icons/chevron-right.png" alt="Try now" />
      </OptFormButton>
      <OptFormBreak />
      <OptFormText>
        Ready to watch? Enter your email to create or restart your membership
      </OptFormText>
    </OptFormContainer>
  );
};

export default OptForm;
