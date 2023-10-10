import React from "react";
import { HeaderContainer, MovieList, OptForm } from "../components";
import { useSelector } from "react-redux";

const Search = () => {
  const insideButton = "Go Back";
  const insideRoute = "/browse";

  const loading = useSelector((state) => state.search.loading);

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
      {!loading && <MovieList />}
    </>
  );
};

export default Search;
