import React, { useEffect } from "react";
import { Grid, Col, Row } from "rsuite";
import { single } from "../actions/newsActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Markup } from "interweave";
import Meta from "./components/Meta";
import { toast } from "react-toastify";

const SingleNews = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();

  const singleNews = useSelector((state) => state.singleNews);
  const { loading, error, singlenews } = singleNews;

  useEffect(() => {
    dispatch(single(id));
    if (error) {
      toast.error(error);
    }
  }, [id, dispatch, error]);

  console.log(singlenews);
  return (
    <div>
      <Meta title={`Article : ${singlenews.title}`} />
      <Grid>
        <Row>
          <Col xs={24} className="text-black">
            <img
              src={`/zamboanga/${singlenews && singlenews.picture}`}
              alt={singleNews && singlenews.title}
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
