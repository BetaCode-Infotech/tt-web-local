import React, {
  useImperativeHandle,
  forwardRef,
  useRef,
  useEffect,
  useState,
} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CustomCarousel.css";

const CustomJobCarousel = forwardRef(({ children, ...props }, ref) => {
  const carouselRef = useRef();
  const containerRef = useRef();
  const [itemsToShow, setItemsToShow] = useState(4); // default to 4

  // Dynamically update items based on container width
  useEffect(() => {
    const calculateItems = () => {
      const width = containerRef.current?.offsetWidth || 0;
      const itemWidth = 250; // Assume each card is ~250px wide
      const gap = 16; // margin/padding between cards

      const maxItems = Math.floor(width / (itemWidth + gap));
      setItemsToShow(maxItems || 1); // Always show at least 1 item
    };

    calculateItems();
    window.addEventListener("resize", calculateItems);

    return () => window.removeEventListener("resize", calculateItems);
  }, []);

  const dynamicResponsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: itemsToShow,
    },
  };

  useImperativeHandle(ref, () => ({
    next: () => carouselRef.current?.next(),
    prev: () => carouselRef.current?.previous(),
  }));

  return (
    <div ref={containerRef} style={{ width: "100%" }}>
      <Carousel
        ref={carouselRef}
        responsive={dynamicResponsive}
        arrows={true}
        infinite={false}
        keyBoardControl={true}
        itemClass="carousel-item"
        {...props}
      >
        {children}
      </Carousel>
    </div>
  );
});

export default CustomJobCarousel;
