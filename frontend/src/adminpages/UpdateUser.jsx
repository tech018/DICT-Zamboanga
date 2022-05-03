import React from "react";
import { Drawer, Button, Form, FlexboxGrid } from "rsuite";

const UpdateUser = ({
  setUpdateDrawer,
  updateDrawer,
  drawerTitle,
  handleUpdateUser,
  setPassword,
  setEmail,
}) => {
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
            <Button onClick={handleUpdateUser} appearance="primary">
              Confirm
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          <Form>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={24}>
                <Form.Control
                  style={{ width: "100%", marginBottom: "1rem" }}
                  name="name"
                  autoComplete="off"
                  placeholder="Office Email"
                  onChange={(value) => setEmail(value)}
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={24}>
                <Form.Control
                  style={{ width: "100%" }}
                  name="name"
                  type="password"
                  autoComplete="off"
                  placeholder="Office Contact No"
                  onChange={(value) => setPassword(value)}
                />
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Form>
        </Drawer.Body>
      </Drawer>
    </div>
  );
};

export default UpdateUser;
