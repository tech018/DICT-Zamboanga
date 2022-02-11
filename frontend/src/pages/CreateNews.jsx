import React, { useState, useEffect } from "react";
import { Grid, Row, Col, Input, Loader, Button } from "rsuite";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { createnews } from "../actions/newsActions";
import { useDispatch, useSelector } from "react-redux";
import { upload } from "../actions/photoActions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateNews = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(EditorState.createEmpty());
  const [picture, setPicture] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editorDesc = content;
  const outputcontent = draftToHtml(
    convertToRaw(editorDesc.getCurrentContent())
  );

  const uploadPhoto = useSelector((state) => state.uploadPhoto);
  const { loading, error, photo, success } = uploadPhoto;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const createNews = useSelector((state) => state.createNews);
  const {
    loading: loadingNews,
    error: errorNews,
    news,
    success: successNews,
  } = createNews;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    if (success) {
      setPicture(photo && photo.image);
    }
    if (error) {
      toast.error(error);
    }
    if (successNews) {
      toast.success(news.message);
      navigate("/news");
    }
    if (errorNews) {
      toast.error(errorNews);
    }
  }, [error, success, photo, successNews, news, errorNews, navigate, userInfo]);

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    let formData = new FormData();
    formData.append("file", file);

    dispatch(upload(formData));
  };

  const saveData = (e) => {
    e.preventDefault();
    dispatch(
      createnews({
        title,
        outputcontent,
        picture,
      })
    );
  };

  return (
    <div className="text-black">
      <Grid>
        <Row className="show-grid">
          <Col xs={24}>
            <div
              style={{
                width: "100%",
                margin: "auto",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              <Input
                placeholder="Title"
                onChange={(value) => setTitle(value)}
              />
            </div>
          </Col>
          <Col xs={24}>
            <Editor
              editorState={content}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              wrapperStyle={{
                border: "1px solid white",
                marginBottom: "20px",
              }}
              editorStyle={{
                height: "20rem",
                padding: "0px",
                width: "100%",
                border: "1px solid grey",
              }}
              onEditorStateChange={(editorState) => setContent(editorState)}
            />
          </Col>
          <Col xs={24}>
            <input
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={handleUpload}
              style={{
                margin: "auto",
                display: "block",
              }}
            />
            <br />
            {loading ? (
              <Loader content="Loading..." />
            ) : (
              <img
                src={
                  photo && photo.image
                    ? `/zamboanga/${photo && photo.image}`
                    : `/zamboanga/default.jpg`
                }
                alt="photoupload"
                style={{
                  width: "30rem",
                  height: "20rem",
                  margin: "auto",
                  display: "block",
                }}
              />
            )}
            <br />
          </Col>
          <Col xs={24}>
            {loadingNews ? (
              <Button appearance="primary" loading>
                Loading
              </Button>
            ) : (
              <Button
                style={{
                  float: "Left",
                  display: "block",
                  marginBottom: "1rem",
                }}
                appearance="primary"
                onClick={saveData}
              >
                Create
              </Button>
            )}
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default CreateNews;
