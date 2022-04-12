import React from "react";
import errorqrcode from "../../assets/errorqrcode.png";

const Success = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ marginBottom: "10px" }}
        src={errorqrcode}
        alt="errorqrcode"
        height="100"
        width="100"
      />
      <div style={{ marginBottom: "10px" }}>PLEASE CONTACT</div>
      <div style={{ marginBottom: "10px", color: "red" }}>ADMIN/SUPPORT</div>
      <div style={{ marginBottom: "10px" }}>FOR AUTHENTICATION</div>
    </div>
  );
};

export default Success;
