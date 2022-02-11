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
  Loader,
  InputGroup,
  Input,
  IconButton,
} from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { photolist } from "../actions/photoActions";
import Masonry from "react-responsive-masonry";
import { useState } from "react";
import SearchIcon from "@rsuite/icons/Search";
import { useNavigate } from "react-router-dom";
import TrashIcon from "@rsuite/icons/Trash";
import { deletephoto } from "../actions/photoActions";
import { DELETE_PHOTO_RESET } from "../constants/photoConstant";
import { toast } from "react-toastify";

const Photos = () => {
  const [category, setCategory] = useState("");
  const [pageNumber, setPageNumber] = useState(5);
  const [caption, setCaption] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { Paragraph } = Placeholder;

  const allPhoto = useSelector((state) => state.allPhoto);
  const { loading, error, photos } = allPhoto;

  const deletePhoto = useSelector((state) => state.deletePhoto);
  const {
    loading: loadingDelete,
    error: errorDelete,
    photo: photoDelete,
    success,
  } = deletePhoto;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(photolist(pageNumber, category, caption));
    if (success) {
      toast.success(photoDelete.message);
      dispatch({ type: DELETE_PHOTO_RESET });
    }
    if (errorDelete) {
      toast.error(errorDelete);
    }
  }, [
    dispatch,
    pageNumber,
    category,
    caption,
    success,
    photoDelete,
    errorDelete,
  ]);

  const handleChangeCategory = (value) => {
    setCategory(value);
  };

  const handleDelete = (id) => {
    dispatch(deletephoto(id));
  };
  return (
    <div className="default-width">
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={12}>
            <Grid>
              <Row>
                <Col xs={8}>
                  <div style={{ marginTop: "1.5rem" }}>
                    <Grid>
                      <Row>
                        <Col xs={8}>
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
                          </RadioGroup>
                        </Col>
                        <Col xs={userInfo ? 13 : 16}>
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
            {loading || loadingDelete ? (
              <Paragraph style={{ marginTop: 30 }} />
            ) : (
              <Grid>
                <Row>
                  <Masonry columnsCount={3}>
                    {photos.map((item, i) => (
                      <div className="box-wrap">
                        <div className="box">
                          <Col xs={24} style={{ padding: "0px" }}>
                            <img
                              key={i}
                              src={`/zamboanga/${item.src}`}
                              style={{
                                width: "100%",
                              }}
                              className="imageGallery"
                              alt={item.caption}
                            />
                          </Col>

                          <Col
                            xs={20}
                            style={{
                              marginTop: "0.8rem",
                              marginBottom: "0.8rem",
                            }}
                          >
                            <span style={{ paddingLeft: "1rem" }}>
                              {item.caption}
                            </span>
                          </Col>

                          {userInfo && (
                            <Col xs={4}>
                              <IconButton
                                style={{ padding: "0.5rem", margin: "0.5rem" }}
                                onClick={() => handleDelete(item.id)}
                                appearance="primary"
                                icon={<TrashIcon />}
                              />
                            </Col>
                          )}
                        </div>
                      </div>
                    ))}
                  </Masonry>
                </Row>
              </Grid>
            )}
          </Col>
          <Col xs={24}>
            <div style={{ margin: "1rem" }}>
              <Button
                color="yellow"
                appearance="primary"
                style={{ display: "block", margin: "auto" }}
                onClick={() => setPageNumber(pageNumber + 5)}
              >
                {loading ? <Loader content="Loading..." /> : "Show more"}
              </Button>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Photos;
