import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselCards = (props) => {
  const { items } = props;
  const [width, setWidth] = useState(window.innerWidth);

  let images = items.filter(function (item) {
    return item.type === "image";
  });

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const calcThumbWidth = () => {
    return (
      width / (Object.keys(images).length + 1)
    );
  };

  

  return (
    <Carousel
      showThumbs={true}
      swipeable={true}
      showStatus={false}
      showIndicators={false}
      emulateTouch={true}
      thumbWidth={calcThumbWidth()}
    >
      {images.map((item, index) => {
        return (
          <a key={index} href={item.link}>
            <img src={item.src} alt="Butopea" />
          </a>
        );
      })}
    </Carousel>
  );
};

export default CarouselCards;
