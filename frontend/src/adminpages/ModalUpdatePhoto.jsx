import React, { useEffect, useState } from "react";
import { Modal, Button, Form, InputPicker, Grid, Row, Col } from "rsuite";
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
  pcaption,
  setPcaption,
  pcategory,
  setPcategpry,
  updatephoto,
  toast,
}) => {
  const [src, setSrc] = useState("");
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState("");

  const uploadPhoto = useSelector((state) => state.uploadPhoto);
  const { loading, error, photo, success } = uploadPhoto;

  const updatePhoto = useSelector((state) => state.updatePhoto);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    photo: updatedphoto,
    success: successUpdate,
  } = updatePhoto;

  useEffect(() => {
    if (success) {
      setSrc(photo.image);
    }
    if (successUpdate) {
      toast.success(updatedphoto.message);
    }
    if (errorUpdate) {
      toast.error(errorUpdate);
    }
  }, [success, photo, updatedphoto, errorUpdate]);

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
                  <input
                    className="custom-file-upload"
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    onChange={handleUpload}
                  />
                </Col>
              </Row>
            </Grid>
          </Form>
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
