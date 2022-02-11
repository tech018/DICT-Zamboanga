import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Tag } from "rsuite";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Testimonials = ({ testimonials }) => {
  return (
    <div className="animation-div">
      <Carousel responsive={responsive}>
        {testimonials.map((item) => (
          <div
            style={{
              color: "black",
              marginTop: "4rem",
              fontSize: "0.8rem",
              paddingBottom: "2rem",
            }}
          >
            <p>"{item.desc}"</p>
            <h5>
              <Tag color="red"> - {item.name}</Tag>
            </h5>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
