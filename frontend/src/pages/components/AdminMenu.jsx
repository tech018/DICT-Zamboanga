import React from "react";
import { Navbar, Nav } from "rsuite";
import { logout } from "../../actions/userActions";
import { useDispatch } from "react-redux";

const sidebarcss = {
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
};

const AdminMenu = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar style={sidebarcss}>
        <Nav pullRight>
          <Nav.Item onClick={() => dispatch(logout())}>Logout</Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
};

export default AdminMenu;
