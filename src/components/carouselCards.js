import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { CardSquare, CardSquareCta } from ".";

const StyledLink = styled.a`
  height: 400px;
`;

const CarouselCards = (props) => {
  const { items } = props;
  let images = items.filter(function (item) {
    return item.type === "image";
  });

  return (
    <Carousel
      showThumbs={true}
      swipeable={true}
      showStatus={false}
      infiniteLoop={true}
      emulateTouch={true}
    >
      {images.map((item, index) => {
        return (
          <StyledLink href={item.link}>
            <img
              src={item.src}
              alt="Butopea"
            />
          </StyledLink>
        );
      })}
    </Carousel>
  );
};

export default CarouselCards;
