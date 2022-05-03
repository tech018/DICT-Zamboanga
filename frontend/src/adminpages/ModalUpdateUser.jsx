import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Form,
  InputPicker,
  Loader,
  Grid,
  Row,
  Col,
} from "rsuite";
import { useDispatch } from "react-redux";

const selectFields = [
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

const ModalUpdateUser = ({
  id,
  updateModal,
  handleUpdateClose,
  uploadPhotoRes,
  updateuser,
  password,
  email,
  setPassword,
  setEmail,
  successUploadPhoto,
  loadingUploadPhoto,
  loadingupdateUsers,
  upload,
  src,
  setSrc,
}) => {
  useEffect(() => {
    if (successUploadPhoto) {
      setSrc(uploadPhotoRes.image);
    }
  }, [uploadPhotoRes, successUploadPhoto]);

  const dispatch = useDispatch();

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    let formData = new FormData();
    formData.append("file", file);

    dispatch(upload(formData));
  };

  const handleUpdate = () => {
    dispatch(updateuser(id, email, password, src));
    setSrc("");
  };

  return (
    <div>
      <Modal open={updateModal} onClose={handleUpdateClose}>
        <Modal.Header>
          <Modal.Title>
            <h4>Update Photo</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loadingupdateUsers ? (
            <Loader content="Loading..." />
          ) : (
            <Form>
              <Grid fluid>
                <Row className="show-grid">
                  <Col xs={12}>
                    <Form.Control
                      name="name"
                      autoComplete="off"
                      placeholder="Email"
                      onChange={(value) => setEmail(value)}
                    />
                  </Col>
                  <Col xs={12}>
                    <Form.Control
                      name="name"
                      type="password"
                      autoComplete="off"
                      placeholder="Password"
                      onChange={(value) => setPassword(value)}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    {loadingUploadPhoto ? (
                      <Loader content="Loading..." />
                    ) : (
                      <input
                        className="custom-file-upload text-black"
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        value={src}
                        onChange={handleUpload}
                      />
                    )}
                  </Col>
                </Row>
                <Row>
                  {" "}
                  <Col xs={12}>
                    {src.length >= 1 && (
                      <>
                        <img
                          alt={src}
                          style={{ width: "10rem", paddingTop: "1rem" }}
                          src={`/zamboanga/${src}`}
                        />
                      </>
                    )}
                  </Col>
                </Row>
              </Grid>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button color="red" onClick={handleUpdate} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleUpdateClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalUpdateUser;
