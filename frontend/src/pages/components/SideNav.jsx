import React from "react";
import { Sidenav, Nav } from "rsuite";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/userActions";
import toplogo from "../../images/toplogo.png";
import logo from "../../images/logo.png";
import DashboardIcon from "@rsuite/icons/Dashboard";
import ImageIcon from "@rsuite/icons/Image";
import TreemapIcon from "@rsuite/icons/Treemap";
import PhoneIcon from "@rsuite/icons/Phone";
import UserInfoIcon from "@rsuite/icons/UserInfo";
import OffRoundIcon from "@rsuite/icons/OffRound";

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
              <DashboardIcon />
              Dashboard
            </Link>
            <Link
              eventKey="2"
              style={{ textDecoration: "none" }}
              className="rs-sidenav-item"
              to="/admin/photos"
            >
              <ImageIcon />
              Photos
            </Link>
            <Link
              eventKey="3"
              className="rs-sidenav-item"
              to="/admin/newsandevents"
              style={{ textDecoration: "none" }}
            >
              <TreemapIcon />
              News and Events
            </Link>
            <Link
              eventKey="4"
              style={{ textDecoration: "none" }}
              className="rs-sidenav-item"
              to="/admin/contacts"
            >
              <PhoneIcon />
              Contact
            </Link>
            <Link
              eventKey="4"
              style={{ textDecoration: "none" }}
              className="rs-sidenav-item"
              to="/admin/users"
            >
              <UserInfoIcon />
              Users
            </Link>
            <span
              className="rs-sidenav-item"
              onClick={() => dispatch(logout())}
              style={{ cursor: "pointer" }}
            >
              <OffRoundIcon />
              Logout
            </span>{" "}
            <div>
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "10rem",
                  padding: "1rem",
                  marginLeft: "2.7rem",
                }}
              />
            </div>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default SideNav;
