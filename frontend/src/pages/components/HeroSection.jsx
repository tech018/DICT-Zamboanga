import React from "react";
import { Carousel, Grid, Row, Col } from "rsuite";
import Image1 from "../../images/heroImage1.png";

import DICT from "../../images/dict.png";
import IBPAP from "../../images/ibpap.png";
import LEECHIU from "../../images/leechiu.png";

const HeroSection = () => {
  return (
    <div>
      <div>
        <Carousel key="right.bar" className="custom-slider">
          <div className="custom-slider">
            <Grid>
              <Row className="show-grid" style={{ paddingTop: "1rem" }}>
                <Col xs={9} sm={9}>
                  <h1
                    style={{
                      marginLeft: "5rem",
                      marginTop: "6rem",
                      color: "whitesmoke",
                    }}
                  >
                    Launch of the
                  </h1>
                </Col>
                <Col xs={6} sm={6}>
                  <img src={Image1} alt="image1" className="image1-hero" />
                </Col>
                <Col xs={9} sm={9}>
                  <h1
                    style={{
                      marginLeft: "2rem",
                      marginTop: "6rem",
                      color: "whitesmoke",
                    }}
                  >
                    Roadmaps
                  </h1>
                </Col>
                <Col xs={24}>
                  <span style={{ marginLeft: "1rem", color: "whitesmoke" }}>
                    digitalcitiesph <sup>TM</sup> roadmap
                    <h1>ZAMBOANGA CITY</h1>
                  </span>
                </Col>
              </Row>
            </Grid>
          </div>
          <div className="custom-slider">
            <Grid fluid>
              <Row className="show-grid">
                <Col xs={6} sm={6}>
                  <h1
                    style={{
                      color: "whitesmoke",
                      marginLeft: "1rem",
                      marginTop: "5rem",
                      paddingRight: "2rem",
                      fontSize: "2.5rem",
                    }}
                  >
                    in cooperation with
                  </h1>
                </Col>
                <Col xs={18} sm={18}>
                  <Grid fluid>
                    <Row className="show-grid" style={{ paddingTop: "5rem" }}>
                      <Col xs={8} sm={8}>
                        <img src={DICT} alt="dict" style={{ width: "18rem" }} />
                      </Col>
                      <Col xs={8} sm={8}>
                        <img
                          src={IBPAP}
                          alt="IBPAP"
                          style={{ width: "18rem" }}
                        />
                      </Col>
                      <Col xs={8} sm={8}>
                        <img
                          src={LEECHIU}
                          alt="LEECHIU"
                          style={{ width: "18rem" }}
                        />
                      </Col>
                    </Row>
                  </Grid>
                </Col>
              </Row>
            </Grid>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
