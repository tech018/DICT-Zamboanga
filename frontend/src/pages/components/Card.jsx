import React from "react";
import { Panel, Grid, Row, Col, Tag } from "rsuite";
import ScrollAnimation from "react-animate-on-scroll";

const Card = ({ data }) => {
  return (
    <div>
      <Grid>
        <Row
          className="show-grid"
          style={{ marginTop: "1rem", marginBottom: "4rem" }}
        >
          {data.map((item) => (
            <Col xs={8} sm={8} style={{ padding: "1rem" }}>
              <ScrollAnimation animateIn="animate__flipInY">
                <Panel
                  shaded
                  bordered
                  bodyFill
                  style={{
                    width: "100%",
                    height: "13rem",
                    backgroundColor: "white",
                    color: "black",
                    textAlign: "center",
                  }}
                  key={item.creditNumber}
                >
                  <Tag color="yellow">
                    <h1 style={{ marginTop: "1.2rem", color: "black" }}>
                      {item.creditNumber}
                    </h1>
                  </Tag>
                  <Panel style={{ color: "black" }}>
                    <p>{item.desc}</p>
                  </Panel>
                </Panel>
              </ScrollAnimation>
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  );
};

export default Card;
