import React, { useState } from "react";
import { Modal, Button, Form, InputPicker, Grid, Row, Col } from "rsuite";

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
  updateModal,
  handleUpdateClose,
  pcaption,
  setPcaption,
  pcategory,
  setPcategpry,
}) => {
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
                    onChange={(value) => setPcaption(value)}
                  />
                </Col>
                <Col xs={12}>
                  <InputPicker
                    style={{ marginLeft: "4rem" }}
                    data={selectFields}
                    placeholder="Select category"
                    onChange={(value) => setPcategpry(value)}
                  />
                </Col>
              </Row>
            </Grid>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="red" appearance="primary">
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
