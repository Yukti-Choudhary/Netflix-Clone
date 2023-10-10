import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 6px 0 0 -4px;
  padding: 18px 0;
  align-items: center;

  a {
    display: flex;
  }
`;

export const HeaderBackground = styled.div`
  display: flex;
  flex-direction: column;
  background: url(./images/misc/home-bg.jpg) top left;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeaderVideo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: relative;

  iframe {
    position: absolute;
    z-index: 1;
    border: none;
    margin-left: -12px;
  }

  @media (max-width: 1100px) {
    height: 70vh;
  }

  @media (max-width: 750px) {
    height: 50vh;
  }
`;

export const HeaderLogo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;
  margin-left: 4vw;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
    margin-top: 10px;
  }
`;

export const HeaderButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: fit-content;
  height: fit-content;
  color: white;
  margin-right: 30px;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }
`;

export const HeaderFrame = styled(Container)`
  position: fixed;
  width: 100%;
  z-index: 1000;
  background-color: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 50%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export const HeaderFrameVideo = styled(HeaderFrame)`
  background-color: black;
`;

export const HeaderGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

export const HeaderTextLink = styled.p`
  margin-right: 30px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  font-weight: 700;
  /* font-weight: ${({ active }) => (active === "true" ? "700 " : "normal")};
  color: ${({ active }) => (active === "true" ? "#fff" : "#edeef0")}; */

  &:hover {
    color: #bababa;
  }
`;

export const HeaderPicture = styled.button`
  background-image: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin-right: 4vw;
`;

export const HeaderDropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 12px;
  width: 100px;
  top: 33.5px;
  right: 10px;
  border-radius: 5px;

  ${HeaderGroup} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${HeaderPicture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${HeaderDropdown} {
    display: flex;
    flex-direction: column;
  }
`;
export const HeaderFeature = styled(Container)`
  flex-direction: column;
  align-items: normal;
  width: 50%;
  margin-top: 200px;
  margin-left: 30px;
  position: absolute;
  z-index: 1;

  @media (max-width: 1100px) {
    width: 70%;
    margin-top: 150px;
  }

  @media (min-width: 1000px) {
    margin-left: 56px;
  }

  @media (max-width: 750px) {
    width: fit-content;
  }
`;

export const HeaderFeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;

  @media (max-width: 1000px) {
    font-size: 30px;
  }

  @media (max-width: 800px) {
    font-size: 20px;
  }

  @media (max-width: 550px) {
    font-size: 15px;
  }
`;

export const HeaderText = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

  @media (max-width: 1000px) {
    font-size: 16px;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const HeaderPlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }

  @media (max-width: 1000px) {
    font-size: 16px;
  }

  @media (max-width: 800px) {
    font-size: 13px;
  }

  @media (max-width: 550px) {
    font-size: 10px;
    max-width: 80px;
  }
`;
