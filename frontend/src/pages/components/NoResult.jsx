import React, { useEffect, useState } from "react";
import EmptyImage from "../../assets/empty.svg";


const NoResult = ({title}) => {

  return (
    <>
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
      }}>No Result Found for "{title}"</h3>
      <h6 style={{textAlign: 'center', color: "gray", 
      }}>Check for spelling, try a more general term or look up a specific file.</h6>
    </div>
    </>
  );
};
export default NoResult;
