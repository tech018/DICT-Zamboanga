import React from "react";
import { Panel } from "rsuite";
import { Grid, Col, Row, Button, Loader } from "rsuite";
import ScrollAnimation from "react-animate-on-scroll";

import Talent from "../../images/backgroundContact.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ContactCard = ({ contacts, loading }) => {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <div
      style={{
        backgroundImage: "url(" + Talent + ")",
        backgroundSize: "cover",
      }}
    >
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.692)" }}>
        {userInfo && (
          <div style={{ marginLeft: "2rem", paddingTop: "2rem" }}>
            <Button
              onClick={() => navigate("/admin/contact/new")}
              appearance="primary"
            >
              Create
            </Button>
          </div>
        )}
        {loading ? (
          <Loader center content="loading" />
        ) : (
          <Grid>
            <Row style={{ marginTop: "1.5rem" }} className="text-black">
              {contacts.map((item) => (
                <div>
                  <Col xs={6}>
                    <ScrollAnimation animateIn="animate__flipInX">
                      <Panel
                        shaded
                        bordered
                        bodyFill
                        style={{
                          backgroundColor: "white",
                          height: 540,
                          marginBottom: "1.5rem",
                        }}
                        className="img-hover-zoom"
                      >
                        <div style={{ padding: "1rem" }}>
                          <img
                            className="image"
                            src={`/zamboanga/${item.image}`}
                            style={{
                              padding: "1.7rem",
                              display: "block",
                              margin: "auto",
                            }}
                            height="240"
                            alt={item.contactInfo}
                          />
                          <p style={{ fontWeight: "bolder" }}>{item.title}</p>
                          <br />
                          <span>{item.contactInfo}</span> <br />
                          <span>
                            <small>
                              {item.contactPos}
                              <br />
                              {item.clusterReg}
                              <br />
                              {item.address}
                              <br />
                              {item.email}
                              <br />
                              {item.contactNo}
                            </small>
                          </span>
                        </div>
                      </Panel>
                    </ScrollAnimation>
                  </Col>
                </div>
              ))}
            </Row>
          </Grid>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
