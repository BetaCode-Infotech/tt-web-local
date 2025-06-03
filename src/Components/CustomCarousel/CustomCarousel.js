import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CustomCarousel.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

const CustomCarousel = ({ children, ...props }) => {
  return (
    <Carousel
      responsive={responsive}
      arrows={true}
      infinite={false}
      keyBoardControl={true}
      itemClass="carousel-item"
      {...props}
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;
