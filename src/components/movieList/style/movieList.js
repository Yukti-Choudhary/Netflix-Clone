import styled from "styled-components/macro";

export const CardTitle = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  z-index: 10;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  > ${CardTitle} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const CardGroup = styled.div`
  display: flex;
  margin-bottom: 100px;
  flex-direction: column;
  position: relative;

  > ${Card} {
    @media (min-width: 1100px) {
      margin-top: -90px;
    }

    @media (max-width: 1100px) {
      margin-top: -70px;
    }
  }
`;

export const CardSubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const CardText = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

export const CardMeta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const CardEntities = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;

  &:hover {
    .left,
    .right {
      visibility: visible;
    }
  }

  .left {
    filter: brightness(0) invert(1);
    position: absolute;
    left: 1vw;
    top: 40%;
    width: 2vw;
    z-index: 100;
    transform: rotate(180deg);
    cursor: pointer;
    visibility: hidden;

    &:hover {
      width: 2.5vw;
      transition: width 0.1s ease;
    }
  }
  .right {
    filter: brightness(0) invert(1);
    position: absolute;
    right: 1vw;
    top: 40%;
    width: 2vw;
    z-index: 100;
    cursor: pointer;
    visibility: hidden;

    &:hover {
      width: 2.5vw;
      transition: width 0.1s ease;
    }
  }
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  position: relative;
  cursor: pointer;
  transition: all 0.7s ease;

  &:hover {
    z-index: 99;
    transform: scale(1.2);
  }

  @media (min-width: 1000px) {
    &:hover {
      height: 350px;
      border-radius: 10px;
    }
  }

  @media (min-width: 1000px) {
    &:hover ${CardMeta}, &:hover ${CardText}, &:hover ${CardSubTitle} {
      display: -webkit-box;
      z-index: 100;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &:first-of-type {
    margin-left: 56px;

    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-right: 56px;

    @media (max-width: 1000px) {
      margin-right: 30px;
    }
  }
`;

export const CardImage = styled.img`
  border: 0;
  width: 250px;
  max-width: 305px;
  cursor: pointer;
  padding: 0;
  margin: 0;

  @media (max-width: 1000px) {
    width: 150px;
  }
`;
