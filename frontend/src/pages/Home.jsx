import React from "react";
import WhyZamboanga from "./components/WhyZamboanga";
import backgroundImage from "../images/backgroundImage.jpg";
import HeroSection from "./components/HeroSection";
import Talent from "./components/Talent";
import OurPartners from "./components/OurPartners";
import ScrollAnimation from "react-animate-on-scroll";
import Meta from "./components/Meta";

const Home = () => {
  return (
    <div>
      <Meta title={`Digital City Zamboanga Website`} />
      <div
        style={{
          backgroundImage: "url(" + backgroundImage + ")",
          backgroundSize: "cover",
        }}
      >
        <div className="default-width">
          <ScrollAnimation animateIn="fadeIn">
            <HeroSection />
          </ScrollAnimation>
        </div>
      </div>
      <div className="default-width">
        <ScrollAnimation animateIn="fadeIn">
          <WhyZamboanga />
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="fadeIn">
        <Talent />
      </ScrollAnimation>
      <div className="default-width">
        <ScrollAnimation animateIn="fadeIn">
          <OurPartners />
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Home;
