// src/Login.js

import React from "react";
import buildingImage from "../assets/Image.png"; // Ensure the path to the image is correct
import Logo from "../assets/logo.png"; // Ensure the path to the image is correct
import "../style/Forgetpassword.css";

function Forgetpassword() {
  return (
    <div className="login-container">
      <div className="login-image">
        <img src={buildingImage} alt="Building" />
      </div>

      <div className="login-form">
        <h1>Forget Password </h1>
        <h3
          style={{
            color: "#898989",
            fontSize: "14px",
            lineHeight: "20px",
            marginRight: "220px",
            marginTop: "-10px",
            marginBottom: "40px",
          }}
        >
          Change your password
        </h3>

        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <i className="material-icons">email</i>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <button type="submit">Send Verification Code</button>
        </form>
      </div>
      <div className="footer">
        <p>© Copyright 2008 - 2024 Carview. All Rights Reserved</p>

        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Earnings Disclaimer</a>
          <a href="#">Compensation Disclosure</a>
        </div>
      </div>
    </div>
  );
}

export default Forgetpassword;
