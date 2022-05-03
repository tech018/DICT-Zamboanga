import React, { useEffect } from "react";
import { Grid, Row, Col, Button, InputPicker } from "rsuite";
import NewsCard from "./components/NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { newslist } from "../actions/newsActions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Meta from "./components/Meta";

const selectFields = [
  {
    label: "10 Items",
    value: "10",
  },
  {
    label: "20 Items",
    value: "20",
  },
  {
    label: "100 Items",
    value: "100",
  },
  {
    label: "1000 Items",
    value: "1000",
  },
];

const News = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const title = "";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allNews = useSelector((state) => state.allNews);
  const { loading, error, news, totalItems, currentPage } = allNews;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleNextPage = () => {
    setPage(currentPage + 1);
  };
  const handlePrevious = () => {
    setPage(currentPage === 0 ? currentPage : currentPage - 1);
  };

  useEffect(() => {
    dispatch(newslist(page, size, title));
  }, [dispatch, size, navigate, page, title]);
  return (
    <div className="default-width text-black">
      <Meta title={`News and Events`} />
      <Grid fluid style={{ marginTop: "1rem", marginBottom: "2rem" }}>
        <Row className="show-grid" style={{ margin: "auto" }}>
          <Col xs={24}>
            <h1 style={{ textAlign: "center" }}>News and Events</h1>
          </Col>

          <Col xs={24}>
            <NewsCard
              loading={loading}
              error={error}
              news={news}
              userInfo={userInfo}
              dispatch={dispatch}
            />
          </Col>
          <Col xs={24}>
            {news.length > 0 && (
              <div style={{ margin: "1.5rem" }}>
                <span className="text-black" style={{ padding: "1rem" }}>
                  Total News : {totalItems}
                </span>
                <Button
                  appearance="primary"
                  style={{ marginRight: "1rem" }}
                  onClick={handlePrevious}
                  disabled={page === 0}
                >
                  Prev
                </Button>
                <Button appearance="primary" onClick={handleNextPage}>
                  Next
                </Button>
                <InputPicker
                  style={{ marginLeft: "1rem", width: "10rem" }}
                  data={selectFields}
                  placeholder={`${size} items`}
                  onChange={(file) => setSize(file)}
                />
              </div>
            )}
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default News;
