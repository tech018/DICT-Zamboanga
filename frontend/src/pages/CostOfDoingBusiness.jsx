import React from "react";
import { Row, Grid, Col } from "rsuite";
import backgroundTalent from "../images/backgroundTalent.jpg";

const CostOfDoingBusiness = () => {
  return (
    <div className="default-width">
      <Grid fluid>
        <Row className="show-grid text-black">
          <Col xs={24} sm={24}>
            <div>
              <img
                src={backgroundTalent}
                alt="backgroundTalent"
                style={{ width: "100%", height: "22rem" }}
              />
            </div>
          </Col>

          <Col xs={24}>
            <div className="box-shadow">
              <div
                style={{
                  backgroundColor: "#1b2179",
                  display: "inline-block",
                  margin: "0 23px",
                  marginTop: "-80px",
                }}
              >
                <h3 style={{ padding: "0.5rem", color: "white" }}>
                  Cost of Doing Business
                </h3>
              </div>
              <div style={{ padding: "2rem" }}>
                <p>
                  The City Government of Zamboanga gives tax exemption,
                  privileges and incentives under the Zamboanga City Investment
                  Incentive Code of 2004.
                </p>
                <p>
                  Ordinance No. 437 on the other hand, identified fifteen (15)
                  Investment Priority Areas. Among these are the Business
                  Process Outsourcing (BPO), Creative Industries, and Research
                  and Development and Innovation.
                </p>
                <p>
                  New businesses with a total project cost of 10 Million and
                  above and a minimum number of 10 employees may avail for
                  incentives.
                </p>
                <p>
                  Meanwhile, existing businesses with a total project cost of 3
                  Million and above and a minimum number of 10 employees may
                  also avail for incentives. Tax exemptions may be granted from
                  three (3) to six (6) years. This will depend on the total
                  project cost, number of employees and upon the approval of the
                  Zamboanga City Investment Incentive Board.
                </p>
                <p>
                  The average rental rate for commercial or office space in
                  Zamboanga City in 2019 is five hundred (500) pesos per square
                  meter. This figure is lower than the average cost of rent in
                  2018 at seven hundred (700) pesos per square meter.
                </p>
                <p>
                  The presence of local incentive code in Zamboanga City
                  signifies the seriousness of the LGU to attract investors. If
                  qualified, the Zamboanga City Investment Incentives Board will
                  award a certificate of registration granting the company tax
                  exemptions, privileges, and incentives for six (6) years
                  through a board resolution.
                </p>
                <p>
                  The city has stable power with fair rate of Php10.18 per
                  kilowatt hour. The city is also enjoying a steady supply of
                  water with a rate of 26.00 per cubic meter.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default CostOfDoingBusiness;
