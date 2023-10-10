import React from "react";
import { SearchMovieContainer } from "./style/pagesStyle";
import { HeaderContainer, MovieList, OptForm } from "../components";
import { useSelector } from "react-redux";

const Search = () => {
  const insideButton = "Go Back";
  const insideRoute = "/browse";

  const { loading, searchMovies } = useSelector((state) => state.search);

  return (
    <>
      <HeaderContainer insideButton={insideButton} insideRoute={insideRoute} />
      <OptForm insideButton={insideButton}>
        {loading && (
          <center style={{ marginTop: "30px" }}>
            <img src="./images/misc/loading.gif" alt="Loading" />
          </center>
        )}
      </OptForm>
      <SearchMovieContainer>
        {loading === false && (
          <MovieList title="Recommended Movies" movies={searchMovies} />
        )}
      </SearchMovieContainer>
    </>
  );
};

export default Search;
