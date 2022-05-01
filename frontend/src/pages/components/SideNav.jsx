import React from "react";
import { Sidenav, Nav } from "rsuite";
import { Link } from "react-router-dom";

const sidebarcss = {
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  width: 255,
  height: "100%",
};

const SideNav = () => {
  return (
    <div style={sidebarcss}>
      <Sidenav defaultOpenKeys={["3", "4"]} activeKey="1">
        <Sidenav.Body>
          <Nav>
            <Link
              eventKey="1"
              style={{ textDecoration: "none" }}
              className="rs-sidenav-item"
              to="/"
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
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default SideNav;
