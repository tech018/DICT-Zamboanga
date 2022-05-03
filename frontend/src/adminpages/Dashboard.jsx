import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import image1 from "../images/image.png";

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
    <div className="text-black dashboard" style={{ padding: "1rem" }}>
      <h2>Hi, {userInfo && userInfo.email}</h2>
      <span>Welcome to website administrator's area</span>
      <img
        src={image1}
        alt="image1"
        style={{
          width: "40rem",
          height: "25rem",
        }}
      />
    </div>
  );
};

export default Dashboard;
