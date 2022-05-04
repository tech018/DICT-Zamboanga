import React from "react";
import EmptyImage from "../../assets/empty.svg";

const EmptyRow = () => {
  return (
    <div style={{width: "100%", padding: "2rem", display: "inline-block",
  }}>
       <img
        style={{ width: "20rem", 
        marginTop: "1rem", 
        marginLeft: "auto",
        marginRight: "auto",
        display: "block"}}
        src={EmptyImage}
        alt="empty"
      />
      <h3 style={{textAlign: 'center', color: "black", 
      marginTop: '2rem'
      }}>No Data to Display</h3>
      
    </div>
  );
};

export default EmptyRow;
