import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div className="text-black" style={{ padding: "1rem" }}>
      <h2>Hi, {userInfo.email}</h2>
    </div>
  );
};

export default Dashboard;
