import React from "react";
import { Grid, Row, Col } from "rsuite";
import logo from "../images/logo.png";
import overview from "../images/overview.jpg";

const OverView = () => {
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
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    backgroundImage: "url(" + overview + ")",
                    backgroundSize: "cover",
                    borderBottom: "rgba(243, 34, 6, 0.603) 3px solid",
                  }}
                >
                  <Col xs={12}>
                    <h1
                      style={{
                        paddingLeft: "12rem",
                        paddingTop: "4rem",
                        color: "#1f2072",
                      }}
                    >
                      digital
                    </h1>
                    <h1 style={{ paddingLeft: "12rem", color: "#d50100" }}>
                      ZAMBOANGA
                    </h1>
                  </Col>
                  <Col xs={12}>
                    <img
                      src={logo}
                      alt="overview"
                      style={{
                        width: "15rem",
                        padding: "1.5rem",
                      }}
                    />
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
                }}
              >
                <h3 style={{ padding: "0.5rem", color: "white" }}>Overview</h3>
              </div>
              <div style={{ padding: "3rem" }}>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Zamboanga
                  City is a formidable force in the information and
                  communications technology (ICT) map of Mindanao and the
                  Philippines, with almost a million people, The city is a
                  thriving and competitive location for digital jobs. The size,
                  quality and scalability of its human resource serve as
                  foundation of the city’s potential to effectively host small
                  to large scale companies that provide and perform information
                  and communications technology or ICT-driven services for
                  international and local clients.
                </p>
                <p>
                  With an annual 8,000 college graduates and 17,000 trainees
                  vocational skilled in English, and Chavacano (Spanish-based
                  Creole language) aside from Filipino, Bisaya and local
                  dialects, the city offers investors an ideal ecosystem to
                  succeed and expand in.
                </p>
                <p>
                  Within the center of the city are three large universities,
                  namely, Western Mindanao State University (WMSU), Ateneo De
                  Zamboanga University (ADZU), and Universidad De Zamboanga
                  (UZ). ADZU has been recognized by the Commission on Higher
                  Education (CHED) as a center of development for Information
                  Technology and Center of Excellence in Teacher Education. As
                  of 2021, there more than 2,000 online English teachers within
                  the Zamboanga Peninsula.
                </p>
                <p>
                  The combination of very strong collaboration between
                  supportive local government and an active private sector gives
                  Zamboanga a bigger edge from other locations.
                </p>
                <p>
                  Several years ago, stakeholders from the academe and business
                  sector joined hands with the city government and national
                  government line agencies to establish the Zamboanga
                  information and communications technology (ICT) Council. To
                  further strengthen the initiatives of the council, the local
                  government initiated the creation ICT-Business Process
                  Management (BPM) Committee with annual budget of Php5M for
                  talent development.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default OverView;
