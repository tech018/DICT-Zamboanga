import React from "react";
import toplogo from "../../images/toplogo.png";
import topbackground from "../../images/topbackground.jpg";

const LogoArea = () => {
  return (
    <div
      style={{
        backgroundImage: "url(" + topbackground + ")",
        backgroundSize: "cover",
      }}
    >
      <div style={{ backgroundColor: "rgba(245, 245, 245, 0.623)" }}>
        <div className="default-width">
          <img
            src={toplogo}
            alt="logo"
            style={{ width: "25rem", padding: "0.5rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoArea;
