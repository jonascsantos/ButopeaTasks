import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselCards = (props) => {
  const { items } = props;
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const calcThumbWidth = () => {
    return (
      -0.00008765044479330194 * width * width +
      0.24421768707482994 * width -
      30.531299058084773
    );
  };

  let images = items.filter(function (item) {
    return item.type === "image";
  });

  return (
    <Carousel
      showThumbs={true}
      swipeable={true}
      showStatus={false}
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
