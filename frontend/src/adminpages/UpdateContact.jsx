import React, { useState } from "react";
import { Drawer, Button, Form, Loader, FlexboxGrid } from "rsuite";

const UpdateContact = ({
  id,
  setUpdateDrawer,
  updateDrawer,
  drawerTitle,
  upload,
  dispatch,
  loadingUploadPhoto,
  src,
  updatecontact,
}) => {
  const [title, setTitle] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [contactPos, setContactPos] = useState("");
  const [clusterReg, setClusterReg] = useState("");
  const [address, settAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    let formData = new FormData();
    formData.append("file", file);

    dispatch(upload(formData));
  };

  const handleUpdateContact = (e) => {
    e.preventDefault();
    dispatch(
      updatecontact(
        id,
        title,
        contactInfo,
        contactPos,
        src,
        clusterReg,
        address,
        email,
        contactNo
      )
    );
    setUpdateDrawer(false);
  };

  return (
    <div>
      <Drawer
        backdrop="static"
        open={updateDrawer}
        onClose={() => setUpdateDrawer(false)}
      >
        <Drawer.Header>
          <Drawer.Title>Update {drawerTitle}</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => setUpdateDrawer(false)}>Cancel</Button>
            <Button onClick={handleUpdateContact} appearance="primary">
              Confirm
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          <Form>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={24}>
                <Form.Control
                  name="name"
                  autoComplete="off"
                  placeholder="Department Title"
                  onChange={(value) => setTitle(value)}
                  style={{ width: "100%", marginBottom: "1rem" }}
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={24}>
                <Form.Control
                  name="name"
                  autoComplete="off"
                  placeholder="Contact Info"
                  style={{ width: "100%", marginBottom: "1rem" }}
                  onChange={(value) => setContactInfo(value)}
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={24}>
                <Form.Control
                  name="name"
                  autoComplete="off"
                  placeholder="Contact Position"
                  style={{ width: "100%", marginBottom: "1rem" }}
                  onChange={(value) => setContactPos(value)}
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={24}>
                <Form.Control
                  name="name"
                  autoComplete="off"
                  placeholder="Cluster or Region"
                  style={{ width: "100%", marginBottom: "1rem" }}
                  onChange={(value) => setClusterReg(value)}
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={24}>
                <Form.Control
                  name="name"
                  autoComplete="off"
                  placeholder="Office Address"
                  style={{ width: "100%", marginBottom: "1rem" }}
                  onChange={(value) => settAddress(value)}
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={24}>
                <Form.Control
                  name="name"
                  autoComplete="off"
                  placeholder="Office Email"
                  style={{ width: "100%", marginBottom: "1rem" }}
                  onChange={(value) => setEmail(value)}
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={24}>
                <Form.Control
                  name="name"
                  autoComplete="off"
                  placeholder="Office Contact No"
                  style={{ width: "100%", marginBottom: "1rem" }}
                  onChange={(value) => setContactNo(value)}
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={24}>
                {loadingUploadPhoto ? (
                  <Loader content="Loading..." />
                ) : (
                  <input
                    className="custom-file-upload text-black"
                    style={{ width: "18.8rem" }}
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    onChange={handleUpload}
                  />
                )}
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Form>
        </Drawer.Body>
      </Drawer>
    </div>
  );
};

export default UpdateContact;
