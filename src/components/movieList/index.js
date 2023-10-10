import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardEntities,
  CardGroup,
  CardImage,
  CardItem,
  CardMeta,
  CardSubTitle,
  CardText,
  CardTitle,
} from "./style/movieList";
import { IMG_CDN_URL } from "../../utils/constants";

const MovieList = ({ title, movies }) => {
  const [isMoved, setIsMoved] = useState(false);
  const [, setBox] = useState(0);
  const cardRef = useRef();

  useEffect(() => {
    if (cardRef.current) {
      setBox(cardRef.current.scrollLeft);
    }
  }, []);

  const handleClick = (direction) => {
    const width = cardRef.current.clientWidth;
    if (direction === "left") {
      cardRef.current.scrollLeft -= width;
    } else {
      setIsMoved(true);
      cardRef.current.scrollLeft += width;
    }
  };

  return (
    <CardGroup>
      <Card>
        <CardTitle>{title}</CardTitle>
        <CardEntities ref={cardRef}>
          <img
            style={{ display: !isMoved && "none" }}
            className="left"
            src="/images/icons/chevron-right.png"
            alt="left"
            onClick={() => handleClick("left")}
          />

          {movies?.map((item) => {
            if (!item.poster_path) return;
            return (
              <CardItem key={item.id}>
                <CardImage
                  src={IMG_CDN_URL + item.poster_path}
                  alt={item.title}
                />
                <CardMeta>
                  <CardSubTitle>item.title</CardSubTitle>
                  <CardText>item.description</CardText>
                </CardMeta>
              </CardItem>
            );
          })}

          {movies.length > 5 && (
            <img
              className="right"
              src="/images/icons/chevron-right.png"
              alt="right"
              onClick={() => handleClick("right")}
            />
          )}
        </CardEntities>
      </Card>
    </CardGroup>
  );
};

export default MovieList;
