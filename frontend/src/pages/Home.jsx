import React from "react";
import WhyZamboanga from "./components/WhyZamboanga";
import backgroundImage from "../images/backgroundImage.jpg";
import HeroSection from "./components/HeroSection";
import Talent from "./components/Talent";
import OurPartners from "./components/OurPartners";
const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(" + backgroundImage + ")",
          backgroundSize: "cover",
        }}
      >
        <div className="default-width">
          <HeroSection />
        </div>
      </div>
      <div className="default-width">
        <WhyZamboanga />
      </div>
      <Talent />
      <div className="default-width">
        <OurPartners />
      </div>
    </div>
  );
};

export default Home;
