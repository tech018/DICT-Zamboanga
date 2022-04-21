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
            <Link eventKey="2" className="rs-sidenav-item" to="/">
              Dashboard
            </Link>
            <Link eventKey="2" className="rs-sidenav-item" to="/admin/photos">
              Photos
            </Link>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default SideNav;
