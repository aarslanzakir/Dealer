// src/Login.js

import React from "react";
import "../style/Login.css";
import buildingImage from "../assets/Image.png"; // Ensure the path to the image is correct
import Logo from "../assets/logo.png"; // Ensure the path to the image is correct

function Signin() {
  return (
    <div className="login-container">
      <div className="login-image">
        <img src={buildingImage} alt="Building" />
      </div>

      <div className="login-form">
        <div className="signin">
          {" "}
          <img style={{ marginRight: "300px" }} src={Logo} alt="Logo" />
          <h1 style={{ marginRight: "40px" }}>Sign In to your account</h1>
        </div>
        <h3
          style={{
            Color: "#898989",
            fontSize: "14px",
            lineHeight: "20px",
            marginRight: "140px",
            marginTop: "-10px",
            marginBottom: "40px",
          }}
        >
          Enter your details to proceed further
        </h3>

        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <i className="material-icons">email</i>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <i className="material-icons">lock</i>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="forgot-password">
            <a href="/forgetpassword">Forget Password?</a>
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p className="terms">
          By logging in, you are agreeing to our{" "}
          <a href="#">Terms & Conditions</a>.
        </p>
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

export default Signin;
