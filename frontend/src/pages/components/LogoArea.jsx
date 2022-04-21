import React from "react";
import toplogo from "../../images/toplogo.png";
import topbackground from "../../images/topbackground.jpg";
import dict from "../../images/dict.png";
import ibpap from "../../images/ibpap.png";
import leechiu from "../../images/leechiu.png";
import { FlexboxGrid } from "rsuite";

const LogoArea = () => {
  return (
    <div
      style={{
        backgroundImage: "url(" + topbackground + ")",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(245, 245, 245, 0.623)",
          paddingTop: "10px",
        }}
        className="show-grid"
      >
        <FlexboxGrid
          className="default-width"
          style={{ paddingBottom: "0.8rem" }}
        >
          <FlexboxGrid.Item colspan={12}>
            <div className="default-width">
              <img
                src={toplogo}
                className="logo"
                alt="logo"
                style={{ width: "25rem", padding: "0.5rem" }}
              />
            </div>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={4}>
            <div className="default-width">
              <img
                src={dict}
                className="logo"
                alt="logo"
                style={{ width: "100%" }}
              />
            </div>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={4}>
            <div className="default-width">
              <img
                src={ibpap}
                className="logo"
                alt="logo"
                style={{ width: "100%" }}
              />
            </div>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={4}>
            <div className="default-width">
              <img
                src={leechiu}
                className="logo"
                alt="logo"
                style={{ width: "100%" }}
              />
            </div>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>
    </div>
  );
};

export default LogoArea;
