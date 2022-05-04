import React from "react";
import { Modal, Button, Form, Loader, Grid, Row, Col } from "rsuite";

const ModalCreateUser = ({
  avatar,
  setPassword,
  setEmail,
  handleCreateUser,
  handleCreateClose,
  handleUpload,
  loadingUploadPhoto,
  createModal,
  loadingcreateUser,
}) => {
  return (
    <div>
      <Modal open={createModal} onClose={handleCreateClose}>
        <Modal.Header>
          <Modal.Title>
            <h4>Create User</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loadingcreateUser ? (
            <Loader content="Loading..." />
          ) : (
            <Form>
              <Grid fluid>
                <Row className="show-grid">
                  <Col xs={24}>
                    <Form.Control
                      name="name"
                      autoComplete="off"
                      placeholder="Email"
                      onChange={(value) => setEmail(value)}
                      style={{ width: "100%" }}
                    />
                  </Col>
                  <Col xs={24}>
                    <Form.Control
                      name="name"
                      autoComplete="off"
                      type="password"
                      placeholder="Password"
                      onChange={(value) => setPassword(value)}
                      style={{ width: "100%", marginTop: "1rem" }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={24}>
                    {loadingUploadPhoto ? (
                      <Loader content="Loading..." />
                    ) : (
                      <input
                        className="custom-file-upload text-black"
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        placeholder={avatar}
                        onChange={handleUpload}
                      />
                    )}
                  </Col>
                </Row>
                <Row>
                  {" "}
                  <Col xs={24}>
                    {avatar.length >= 1 && (
                      <>
                        <img
                          alt={avatar}
                          style={{ width: "10rem", paddingTop: "1rem" }}
                          src={`/zamboanga/${avatar}`}
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
          <Button color="red" onClick={handleCreateUser} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleCreateClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalCreateUser;
