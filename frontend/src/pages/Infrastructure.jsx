import React from "react";
import { Grid, Row, Col } from "rsuite";
import infrastructure from "../images/infrastructure.jpg";

const Infastructure = () => {
  return (
    <div className="default-width text-black ">
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={24} sm={24}>
            <div>
              <Grid fluid>
                <Row
                  className="show-grid"
                  style={{
                    backgroundImage: "url(" + infrastructure + ")",
                    backgroundSize: "cover",

                    borderBottom: "rgba(243, 34, 6, 0.603) 3px solid",
                  }}
                >
                  <Col xs={24}>
                    <div style={{ padding: "5.5rem" }}>
                      <h1
                        style={{
                          color: "#1f2072",
                        }}
                        className="text-stoke"
                      >
                        digital
                      </h1>
                      <h1 className="text-stoke" style={{ color: "#d50100" }}>
                        ZAMBOANGA
                      </h1>
                    </div>
                  </Col>
                </Row>
              </Grid>
              <div
                style={{
                  backgroundColor: "#fed501",
                  display: "inline-block",
                  margin: "0 23px",
                  marginTop: "-80px",
                  borderRadius: "1%",
                  zIndex: 100,
                }}
              >
                <h3 style={{ padding: "0.5rem", color: "white" }}>
                  Infastructure
                </h3>
              </div>
              <div style={{ padding: "3rem" }}>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Zamboanga
                  City is accessible by air and sea from the key centers of
                  Manila, Cebu, and Davao. It is the transshipment point for
                  domestically and internationally traded products.
                </p>
                <p>
                  Zamboanga International Airport (ZIA) is the main entry and
                  exit point when it comes to aviation transport services. For
                  the water transport component, the port of Zamboanga is the
                  shipping hub of Western Mindanao and part of the national port
                  system.
                </p>
                <p>
                  Zamboanga City is accessible by air and sea from the key
                  centers of Manila, Cebu, and Davao. It is the transshipment
                  point for domestically and internationally traded products.
                </p>
                <p>
                  There are two main entry and exit points in Zamboanga City
                  which are both national highways. One is the Zamboanga West
                  Coastal Road or Zamboanga City-Labuan Limpapa Road, which is
                  in the western portion of the city with Barangay Limpapa
                  serving as its border, while the other is the
                  Pagadian-Zamboanga City Road, which is in the eastern part
                  coming from Tungawan, Zamboanga del Sur. These highways serve
                  as linkages to the other parts of the region like Pagadian
                  City and Dapitan City both span along the east and west coast
                  and intersect in the city proper of Zamboanga.
                </p>
                <p>
                  Additionally, Curuan Lunday Road and Licomo Sinoropan Road are
                  considered as entry and exit points of Zamboanga City.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Infastructure;
