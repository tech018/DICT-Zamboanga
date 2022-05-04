import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import image1 from "../images/backgroundImage.jpg";

const Dashboard = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);
  return (
    <div
      style={{
        backgroundImage: "url(" + image1 + ")",
        height: "100%",
        backgroundSize: "cover",
      }}
    >
      <div className="dashboard" style={{ padding: "2rem" }}>
        <h2>Hi, {userInfo && userInfo.email}</h2>
        <span>Welcome to website administrator's area</span>
      </div>
    </div>
  );
};

export default Dashboard;
