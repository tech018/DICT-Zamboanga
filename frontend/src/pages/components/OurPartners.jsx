import React, { useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { useDispatch, useSelector } from "react-redux";
import { contactlist } from "../../actions/contactActions";
import { Loader } from "rsuite";
import { toast } from "react-toastify";

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

const OurPartners = () => {
  const pageNumber = 8;
  const dispatch = useDispatch();
  const allContact = useSelector((state) => state.allContact);
  const { loading, error, countcontact: partners } = allContact;
  useEffect(() => {
    dispatch(contactlist(pageNumber));
    if (error) {
      toast.error(error);
    }
  }, [dispatch, pageNumber, error]);
  return (
    <div className="animation-div">
      <div
        style={{
          backgroundColor: "#1b2179",
          display: "inline-block",
          margin: "0 23px",
          marginTop: "-80px",
          borderRadius: "1%",
        }}
      >
        <h3 style={{ padding: "0.5rem", color: "white" }}>
          Government Partnership and Support
        </h3>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <Carousel responsive={responsive}>
          {partners.map((item) => (
            <div style={{ textAlign: "center", color: "black" }} key={item.id}>
              <a href={item.link}>
                <img
                  src={`/zamboanga/${item.image}`}
                  alt={item.title}
                  style={{ width: "15rem", padding: "1.5rem" }}
                />
              </a>
              <p>{item.title}</p>
            </div>
          ))}
        </Carousel>
      )}
      ;
    </div>
  );
};

export default OurPartners;
