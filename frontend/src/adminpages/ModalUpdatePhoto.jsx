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
import { useSelector, useDispatch } from "react-redux";
import { upload } from "../actions/photoActions";

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

const ModalUpdatePhoto = ({
  id,
  updateModal,
  handleUpdateClose,
  uploadPhotoRes,
  updatephoto,
  successUploadPhoto,
  loadingUploadPhoto,
  loadingUpdatePhoto,
}) => {
  const [src, setSrc] = useState("");
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (successUploadPhoto) {
      setSrc(uploadPhotoRes.image);
    }
  }, [uploadPhotoRes]);

  const dispatch = useDispatch();

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    let formData = new FormData();
    formData.append("file", file);

    dispatch(upload(formData));
  };

  const handleUpdate = () => {
    dispatch(updatephoto(id, src, caption, category));
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
          {loadingUpdatePhoto ? (
            <Loader content="Loading..." />
          ) : (
            <Form>
              <Grid fluid>
                <Row className="show-grid">
                  <Col xs={12}>
                    <Form.Control
                      name="name"
                      autoComplete="off"
                      placeholder="Name of Photo"
                      onChange={(value) => setCaption(value)}
                    />
                  </Col>
                  <Col xs={12}>
                    <InputPicker
                      style={{ marginLeft: "4rem" }}
                      data={selectFields}
                      placeholder="Select category"
                      onChange={(file) => setCategory(file)}
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

export default ModalUpdatePhoto;
