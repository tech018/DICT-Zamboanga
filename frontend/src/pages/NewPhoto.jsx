import React, { useState, useEffect } from "react";
import { Form, InputPicker, Loader, Button, Panel } from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { upload, createphoto } from "../actions/photoActions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { NEW_PHOTO_RESET } from "../constants/photoConstant";

const data = [
  {
    label: "Places",
    value: "Places",
  },
  {
    label: "Foods",
    value: "Foods",
  },
  {
    label: "Events",
    value: "Events",
  },
];

const NewPhoto = () => {
  const [category, setCategory] = useState("");
  const [src, setSrc] = useState("");
  const [caption, setCaption] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const uploadPhoto = useSelector((state) => state.uploadPhoto);
  const { loading, error, photo, success } = uploadPhoto;

  const newPhoto = useSelector((state) => state.newPhoto);
  const {
    loading: loadingNewPhoto,
    error: errorNewPhoto,
    photos,
    success: successNewPhoto,
  } = newPhoto;

  useEffect(() => {
    if (success) {
      setSrc(photo && photo.image);
    }
    if (error) {
      toast.error(error);
    }
    if (successNewPhoto) {
      dispatch({ type: NEW_PHOTO_RESET });
      toast.success(photos.message);

      navigate("/photo");
    }
    if (errorNewPhoto) {
      toast.error(errorNewPhoto);
      dispatch({ type: NEW_PHOTO_RESET });
    }
  }, [
    success,
    photo,
    error,
    successNewPhoto,
    errorNewPhoto,
    photos,
    navigate,
    dispatch,
  ]);

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    let formData = new FormData();
    formData.append("file", file);

    dispatch(upload(formData));
  };

  const handleCreate = (e) => {
    console.log(src);
    e.preventDefault();
    dispatch(createphoto(src, caption, category));
  };

  return (
    <div className="default-width text-black">
      <div style={{ margin: "1rem" }}>
        {loadingNewPhoto ? (
          <Panel header="Panel title"></Panel>
        ) : (
          <Form
            layout="horizontal"
            style={{ marginTop: "4rem", marginBottom: "4rem" }}
          >
            <Form.Group controlId="name-1">
              <Form.ControlLabel>Title</Form.ControlLabel>
              <Form.Control
                name="name"
                autoComplete="off"
                style={{ width: "50rem" }}
                onChange={(value) => setCaption(value)}
              />
            </Form.Group>
            <Form.Group controlId="email-1">
              <Form.ControlLabel>Category</Form.ControlLabel>
              <InputPicker
                data={data}
                style={{ width: "50rem" }}
                onChange={(value) => setCategory(value)}
              />
            </Form.Group>
            <Form.Group>
              <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                onChange={handleUpload}
                style={{ margin: "auto", display: "block" }}
              />
            </Form.Group>
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
            <Form.Group>
              <div style={{ marginTop: "1rem" }}>
                <Button
                  style={{ margin: "auto", display: "block" }}
                  appearance="primary"
                  onClick={handleCreate}
                  disabled={!src || !caption || !category}
                >
                  Create
                </Button>
              </div>
            </Form.Group>
          </Form>
        )}
      </div>
    </div>
  );
};

export default NewPhoto;
