import React, { useEffect } from "react";
import { Grid, Col, Row } from "rsuite";
import { single } from "../actions/newsActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Markup } from "interweave";

const SingleNews = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();

  const singleNews = useSelector((state) => state.singleNews);
  const { loading, error, singlenews } = singleNews;

  useEffect(() => {
    dispatch(single(id));
  }, [id, dispatch]);
  return (
    <div>
      <Grid>
        <Row>
          <Col xs={24} className="text-black">
            <img
              src={`/zamboanga/${singlenews && singlenews.picture}`}
              alt={singleNews && singlenews.name}
              style={{
                width: "50rem",
                margin: "auto",
                display: "block",
                padding: "1rem",
              }}
            />
          </Col>
          <Col xs={24}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <h1
                className="text-black"
                style={{ marginTop: "1rem", paddingBottom: "1rem" }}
              >
                {singlenews && singlenews.title}
              </h1>
              <Markup className="text-black" content={singlenews.content} />
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default SingleNews;
