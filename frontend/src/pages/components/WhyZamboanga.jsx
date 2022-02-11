import React from "react";
import { Container, Grid, Col, Row, Button } from "rsuite";
import Image1 from "../../images/image1.jpg";
import { useNavigate } from "react-router-dom";

const WhyZamboanga = () => {
  const navigate = useNavigate();
  return (
    <div className="box-shadow animation-div">
      <Container>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} sm={12}>
              <h1 style={{ paddingTop: "1rem" }}>
                <span style={{ color: "#1f2070" }}>Digital</span>&nbsp;
                <span style={{ color: "#d50100" }}>Zamboanga</span>
              </h1>
              <p
                style={{ fontSize: "1rem", color: "black", paddingTop: "1rem" }}
              >
                Zamboanga City is a formidable force in the information and
                communications technology (ICT) map of Mindanao and the
                Philippines, with almost a million people, The city is a
                thriving and competitive location for digital jobs. The size,
                quality and scalability of its human resource serve as
                foundation of the city’s potential to effectively host small to
                large scale companies that provide and perform information and
                communications technology or ICT-driven services for
                international and local clients.
              </p>
              <p
                style={{ fontSize: "1rem", color: "black", marginTop: "1rem" }}
              >
                With an annual 8,000 college graduates and 17,000 trainees
                vocational skilled in English, and Chavacano (Spanish-based
                Creole language) aside from Filipino, Bisaya and local dialects,
                the city offers investors an ideal ecosystem to succeed and
                expand in.
              </p>
            </Col>
            <Col xs={12} sm={12}>
              <img
                src={Image1}
                alt="image1"
                style={{ width: "37.2rem", height: "18rem" }}
              />
              <a
                href={`/zamboanga/roadmap.pdf`}
                className="rs-btn rs-btn-primary"
                style={{
                  textDecoration: "none",
                  marginTop: "2rem",
                  padding: "1rem",
                }}
              >
                Download Roadmap
              </a>
            </Col>
            <Col xs={24} sm={24}>
              <Button
                onClick={() => navigate("/about/overview")}
                appearance="primary"
                style={{ marginBottom: "4rem", marginTop: "1rem" }}
              >
                Readmore
              </Button>
            </Col>
          </Row>
        </Grid>
      </Container>
    </div>
  );
};

export default WhyZamboanga;
