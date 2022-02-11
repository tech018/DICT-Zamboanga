import React from "react";
import { Row, Col, Grid } from "rsuite";
import businessEnvironment from "../images/businessEnvironment.jpg";

const BusinessEnvironment = () => {
  return (
    <div className="default-width">
      <Grid fluid>
        <Row className="show-grid text-black">
          <Col xs={24}>
            <img
              src={businessEnvironment}
              alt="businessEnvironment"
              style={{ width: "100%", height: "22rem" }}
            />
          </Col>
          <Col xs={24}>
            <div
              style={{
                backgroundColor: "#1b2179",
                display: "inline-block",
                margin: "0 23px",
                marginTop: "-80px",
              }}
            >
              <h3 style={{ padding: "0.5rem", color: "white" }}>
                Business Environment
              </h3>
            </div>
            <div style={{ padding: "2rem" }}>
              <p>
                The city serves as the Economic Hub for the entire Zamboanga
                Peninsula and the Island Provinces of Basilan, Sulu and
                Tawi-Tawi. The city is one of the Top 10 Taxpayers in the
                country and it has the potential of becoming the No. 1 income
                generator in the country.
              </p>
              <p>
                The Zamboanga City Special Economic Zone Authority and Freeport
                (ZamboEcoZone), also known as Zamboanga Freeport Authority
                (ZFA), was created by virtue of the Republic Acts of the
                Philippines 7903 of the Philippines Constitution in the year
                1995. It was authored by then Congresswoman María Clara L.
                Lobregat. It is located about 23 kilometers from the city
                proper. It is one of the three current Economic Freeport Zones
                outside Luzon. It has four BPO designed buildings, the two
                buildings are ready by 2020 and the other two will be ready by
                2021.
              </p>
              <p>
                The ZAMBOECOZONE offers a spacious and secure facility,
                compliant with BPO Standards ready for lease and with complete
                amenities, making the Authority an ideal place to establish and
                expand businesses. ZAMBOECOZONE continues to experience rapid
                growth in terms of investments due to the favorable business
                climate and incentives offered.
              </p>
              <p>
                The city has an active ICT council, the Zamboanga ICT Council,
                headed by a prominent businessman in the city, and IT- BPM Task
                Force, headed by no less than the City Mayor. The local
                government through its Sangguniang Panglungsod passed an
                ordinance which provide support of 5 million per year for the
                ICT development in the city.
              </p>
              <p>
                The Zamboanga ICT Council is a non-profit organization aimed at
                developing the ICT/BPM industry of Zamboanga City and Western
                Mindanao to create sustainable opportunities and generate more
                jobs using ICT.
              </p>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default BusinessEnvironment;
