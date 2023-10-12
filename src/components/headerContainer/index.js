import React from "react";
import {
  Container,
  HeaderFrame,
  HeaderLogo,
  HeaderButtonLink,
  HeaderBackground,
  HeaderVideo,
  HeaderGroup,
  HeaderPicture,
  HeaderFrameVideo,
  HeaderProfile,
  HeaderTextLink,
  HeaderDropdown,
  HeaderFeatureCallOut,
  HeaderFeature,
  HeaderText,
  HeaderPlayButton,
} from "./style/headerContainer";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import useAuthState from "../../hooks/useAuthState";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import useMovieId from "../../hooks/useMovieId";
import { useSelector } from "react-redux";
import { YOUTUBE_URL } from "../../utils/constants";
import SearchLanguage from "../searchLanguage";

const HeaderContainer = ({
  button,
  route,
  insideButton,
  insideRoute,
  title,
  overview,
  movieId,
  children,
}) => {
  const user = useAuthState();
  useMovieId(movieId);

  const trailer = useSelector((state) => state.movies?.trailer);

  return user ? (
    <HeaderVideo>
      {insideButton === "Search" && (
        <iframe
          width="100%"
          height="100%"
          title="YouTube video player"
          src={
            YOUTUBE_URL +
            trailer +
            "?&autoplay=1&mute=1&playlist=" +
            trailer +
            "&loop=1&showinfo=0&controls=0"
          }
        ></iframe>
      )}
      <Container>
        <HeaderFrameVideo>
          <HeaderGroup>
            <Link to="/">
              <HeaderLogo alt="Netflix" src={logo} />
            </Link>

            {insideButton === "Search" && (
              <HeaderTextLink>Movies</HeaderTextLink>
            )}
          </HeaderGroup>
          <HeaderGroup>
            {insideButton !== "Search" && <SearchLanguage />}

            <HeaderButtonLink to={insideRoute}>{insideButton}</HeaderButtonLink>
            <HeaderProfile>
              <HeaderPicture src={user.photoURL} />
              <HeaderDropdown>
                <HeaderGroup>
                  <HeaderPicture src={user.photoURL} />
                  <HeaderTextLink>{user.displayName}</HeaderTextLink>
                </HeaderGroup>
                <HeaderGroup>
                  <HeaderTextLink
                    onClick={() => {
                      signOut(auth);
                    }}
                  >
                    Sign Out
                  </HeaderTextLink>
                </HeaderGroup>
              </HeaderDropdown>
            </HeaderProfile>
          </HeaderGroup>
        </HeaderFrameVideo>
      </Container>
      {insideButton === "Search" && title && overview && (
        <HeaderFeature>
          <HeaderFeatureCallOut>{title}</HeaderFeatureCallOut>
          <HeaderText>{overview}</HeaderText>
          <HeaderPlayButton>Play</HeaderPlayButton>
        </HeaderFeature>
      )}
      {children}
    </HeaderVideo>
  ) : (
    <HeaderBackground>
      <Container>
        <HeaderFrame>
          <Link to="/">
            <HeaderLogo alt="Netflix" src={logo} />
          </Link>
          <HeaderButtonLink to={route}>{button}</HeaderButtonLink>
        </HeaderFrame>
      </Container>
      {children}
    </HeaderBackground>
  );
};

export default HeaderContainer;
