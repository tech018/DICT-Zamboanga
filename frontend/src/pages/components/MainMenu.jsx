import React from "react";
import { Navbar, Nav, Dropdown } from "rsuite";
import PhoneFillIcon from "@rsuite/icons/PhoneFill";
import InfoRoundIcon from "@rsuite/icons/InfoRound";
import SiteFillIcon from "@rsuite/icons/SiteFill";
import OthersIcon from "@rsuite/icons/Others";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SettingIcon from "@rsuite/icons/Setting";
import OffRoundIcon from "@rsuite/icons/OffRound";
import { logout } from "../../actions/userActions";
import { useDispatch } from "react-redux";
import MemberIcon from "@rsuite/icons/Member";

const MainMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <Navbar className="menu">
        <div className="default-width font">
          <Nav>
            <Nav.Item icon={<OthersIcon />} onClick={() => navigate("/")}>
              Home
            </Nav.Item>
            <Dropdown icon={<InfoRoundIcon />} title="About Zamboanga City">
              <Dropdown.Item onClick={() => navigate("/about/overview")}>
                Overview
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/about/infrastructure")}>
                Infrastructure
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => navigate("/about/costofdoingbusiness")}
              >
                Cost of Doing Business
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => navigate("/about/businessenvironment")}
              >
                Business Environment
              </Dropdown.Item>
            </Dropdown>
          </Nav>
          <Nav.Item icon={<SiteFillIcon />} onClick={() => navigate("/photo")}>
            Photos
          </Nav.Item>

          <Nav.Item
            icon={<PhoneFillIcon />}
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </Nav.Item>
          <Nav.Item icon={<MemberIcon />} onClick={() => navigate("/news")}>
            News and Events
          </Nav.Item>
          {userInfo && (
            <Nav pullRight>
              <Dropdown icon={<SettingIcon />} title="Admin Menu">
                <Dropdown.Item onClick={() => navigate("/admin/dashboard")}>
                  Dashboard
                </Dropdown.Item>
                <Dropdown.Item icon={<OffRoundIcon />} onClick={handleLogout}>
                  Logout
                </Dropdown.Item>
              </Dropdown>
            </Nav>
          )}
        </div>
      </Navbar>
    </div>
  );
};

export default MainMenu;
