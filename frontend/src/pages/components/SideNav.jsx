import React from "react";
import { Sidenav, Nav } from "rsuite";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/userActions";
import toplogo from "../../images/toplogo.png";

const sidebarcss = {
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  width: 255,
  height: "100%",
};

const SideNav = () => {
  const dispatch = useDispatch();
  return (
    <div style={sidebarcss}>
      <Sidenav defaultOpenKeys={["3", "4"]} activeKey="1">
        <Sidenav.Body>
          <div>
            <img
              src={toplogo}
              alt="logo"
              style={{ width: "15rem", margin: "1rem" }}
            />
          </div>
          <Nav>
            <Link
              eventKey="1"
              style={{ textDecoration: "none" }}
              className="rs-sidenav-item"
              to="/admin/dashboard"
            >
              Dashboard
            </Link>
            <Link
              eventKey="2"
              style={{ textDecoration: "none" }}
              className="rs-sidenav-item"
              to="/admin/photos"
            >
              Photos
            </Link>
            <Link
              eventKey="3"
              className="rs-sidenav-item"
              to="/admin/newsandevents"
              style={{ textDecoration: "none" }}
            >
              News and Events
            </Link>
            <Link
              eventKey="4"
              style={{ textDecoration: "none" }}
              className="rs-sidenav-item"
              to="/admin/contacts"
            >
              Contact
            </Link>
            <Link
              eventKey="4"
              style={{ textDecoration: "none" }}
              className="rs-sidenav-item"
              to="/admin/users"
            >
              Users
            </Link>
            <span
              className="rs-sidenav-item"
              onClick={() => dispatch(logout())}
              style={{ cursor: "pointer" }}
            >
              Logout
            </span>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default SideNav;
