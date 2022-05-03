import React from "react";
import EmptyImage from "../../assets/empty.svg";

const EmptyRow = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 className="text-black">No results found</h1>
      <img
        style={{ width: "30rem", marginTop: "1rem" }}
        src={EmptyImage}
        alt="empty"
      />
    </div>
  );
};

export default EmptyRow;
