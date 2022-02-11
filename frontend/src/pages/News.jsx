import React, { useEffect } from "react";
import { Grid, Row, Col, Button, Pagination } from "rsuite";
import NewsCard from "./components/NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { newslist } from "../actions/newsActions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const News = () => {
  const [page, setPage] = useState(0);
  const size = 4;
  const title = "";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allNews = useSelector((state) => state.allNews);
  const { loading, error, news, totalItems, currentPage } = allNews;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(newslist(page, size, title));
  }, [dispatch, size, navigate, page, title]);
  return (
    <div className="default-width text-black">
      <Grid fluid style={{ marginTop: "1rem", marginBottom: "2rem" }}>
        <Row className="show-grid" style={{ margin: "auto" }}>
          <Col xs={24}>
            <h1 style={{ textAlign: "center" }}>News and Events</h1>
          </Col>
          <Col xs={24}>
            {userInfo && (
              <Button
                onClick={() => navigate("/admin/news/create")}
                appearance="primary"
              >
                Create
              </Button>
            )}
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
            <Pagination
              style={{ marginTop: "1rem" }}
              prev
              last
              next
              first
              size="lg"
              total={totalItems}
              limit={size}
              activePage={currentPage === 0 ? 1 : currentPage}
              onChangePage={(value) => setPage(value)}
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default News;
