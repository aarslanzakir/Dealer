import React, { useState } from "react";
import "../style/Login.css";
import buildingImage from "../assets/Image.png";
import Logo from "../assets/logo.png";
import { Mail, Lock, Eye, EyeOff } from 'tabler-icons-react';

function Signin() {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 5 }} className="login-container2">
        <div className="image-container">
          <img src={buildingImage} alt="Building" height={'600px'} />
        </div>

        <div className="login-form">
          <div className="signin">
            <img src={Logo} alt="Logo" />
            <h1>Sign In to your account</h1>
            <h3 style={{ marginLeft: "10px" }} className="signin-subtext">
              Enter your details to proceed further
            </h3>
          </div>

          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <div className="input-with-icon">
                <Mail className="input-icon" />
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="input-with-icon">
                <Lock className="input-icon" />
                <input
                  id="password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <div className="password-toggle" onClick={togglePasswordVisibility}>
                  {passwordVisible ? <Eye /> : <EyeOff />}
                </div>
              </div>
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
      </div>
      <div className="footer">
        <p>© Copyright 2008 - 2024 Carview. All Rights Reserved</p>

        <div className="footer-links">
        <a href="#"></a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Earnings Disclaimer</a>
          <a href="#">Compensation Disclosure</a>
        </div>
      </div>
    </>
  );
}

export default Signin;
