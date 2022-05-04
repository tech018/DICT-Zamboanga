import React, { useEffect } from "react";
import {
  Grid,
  Col,
  Row,
  Placeholder,
  Message,
  RadioGroup,
  Radio,
  Button,
  InputPicker,
  InputGroup,
  Input,
} from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { photolist } from "../actions/photoActions";

import { useState } from "react";
import SearchIcon from "@rsuite/icons/Search";
import { useNavigate } from "react-router-dom";

import Meta from "./components/Meta";
import Lightroom from "react-lightbox-gallery";

const selectFields = [
  {
    label: "4 Items",
    value: "4",
  },
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

const settings = {
  columnCount: {
    default: 5,
    mobile: 3,
    tab: 4,
  },
  mode: "dark",
};

const Photos = () => {
  const [category, setCategory] = useState("");
  const [size, setSize] = useState(6);
  const [caption, setCaption] = useState("");
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { Paragraph } = Placeholder;

  const allPhoto = useSelector((state) => state.allPhoto);
  const { loading, error, photos, currentPage, totalItems } = allPhoto;

  const lightphoto = photos.map(({ src, caption, category }) => ({
    src: `/zamboanga/${src}`,
    desc: caption,
    sub: `Category : ${category}`,
  }));

  console.log(lightphoto);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(photolist(size, category, page, caption));
  }, [dispatch, size, category, caption, page]);

  const handleChangeCategory = (value) => {
    setCategory(value);
  };

  const handleNextPage = () => {
    setPage(currentPage + 1);
  };
  const handlePrevious = () => {
    setPage(currentPage === 0 ? currentPage : currentPage - 1);
  };

  return (
    <div className="default-width">
      <Meta title={`Photos`} />
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={12}>
            <Grid>
              <Row>
                <Col xs={8}>
                  <div style={{ marginTop: "1.5rem" }}>
                    <Grid>
                      <Row>
                        <Col xs={10}>
                          <RadioGroup
                            name="radioList"
                            value={category}
                            onChange={(value) => {
                              handleChangeCategory(value);
                            }}
                            inline
                            appearance="picker"
                            style={{
                              margin: "1rem",
                              color: "black",
                            }}
                          >
                            <span
                              style={{
                                paddingTop: "0.5rem",
                                marginLeft: "1.5rem",
                              }}
                            >
                              Select Category:
                            </span>
                            <Radio value="">All</Radio>
                            <Radio value="Places">Places</Radio>
                            <Radio value="Foods">Foods</Radio>
                            <Radio value="Events">Events</Radio>
                          </RadioGroup>
                        </Col>
                        <Col xs={14}>
                          <div style={{ marginTop: "1rem" }}>
                            <InputGroup
                              inside
                              value={caption}
                              onChange={(e) => setCaption(e.target.value)}
                            >
                              <Input placeholder="search by title" />
                              <InputGroup.Button disabled>
                                <SearchIcon />
                              </InputGroup.Button>
                            </InputGroup>
                          </div>
                        </Col>
                        <Col xs={3}>
                          {userInfo && (
                            <Button
                              onClick={() => navigate("/admin/photo/new")}
                              style={{ marginTop: "1rem" }}
                              color="blue"
                              appearance="primary"
                            >
                              Create Photo
                            </Button>
                          )}
                        </Col>
                      </Row>
                    </Grid>
                  </div>
                </Col>
              </Row>
            </Grid>
          </Col>
          <Col xs={24}>
            {error && <Message type="warning">{error.message}</Message>}
            {loading ? (
              <Paragraph style={{ marginTop: 30 }} />
            ) : (
              <div style={{ padding: "2rem" }}>
                <Lightroom
                  className="default-width"
                  images={lightphoto}
                  settings={settings}
                />
              </div>
            )}
          </Col>
          <Col xs={24}>
            <div style={{ margin: "1rem" }}>
              {photos.length > 0 && (
                <>
                  <span className="text-black" style={{ padding: "1rem" }}>
                    Total Photos : {totalItems}
                  </span>
                  <Button
                    appearance="primary"
                    style={{ marginRight: "1rem" }}
                    onClick={handlePrevious}
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
                </>
              )}
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Photos;
