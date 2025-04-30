import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Make sure this is imported only once in your app

const CustomCarousel = ({ children, ...props }) => {
  return (
    <Carousel
      showStatus={false}
      
      showIndicators={false}
      //   renderArrowPrev={(onClickHandler, hasPrev, label) =>
      //     hasPrev && (
      //       <button
      //         type="button"
      //         onClick={onClickHandler}
      //         className="arrow arrow-left"
      //         aria-label={label}
      //       >
      //         ◀
      //       </button>
      //     )
      //   }
      //   renderArrowNext={(onClickHandler, hasNext, label) =>
      //     hasNext && (
      //       <button
      //         type="button"
      //         onClick={onClickHandler}
      //         className="arrow arrow-right"
      //         aria-label={label}
      //       >
      //         ▶
      //       </button>
      //     )
      //   }
      {...props}
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;
